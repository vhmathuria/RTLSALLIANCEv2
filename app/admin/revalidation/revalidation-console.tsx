"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export default function RevalidationConsole() {
  const [customPath, setCustomPath] = useState("")
  const [selectedPath, setSelectedPath] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [token, setToken] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const commonPaths = [
    { label: "Resources Page", value: "/resources" },
    { label: "BLE Technology Page", value: "/rtls-digital-twin/technologies/ble" },
    { label: "UWB Technology Page", value: "/rtls-digital-twin/technologies/uwb" },
    { label: "WiFi Technology Page", value: "/rtls-digital-twin/technologies/wifi" },
    { label: "GNSS Technology Page", value: "/rtls-digital-twin/technologies/gnss" },
    { label: "LoRa Technology Page", value: "/rtls-digital-twin/technologies/lora" },
  ]

  const handleAuthenticate = () => {
    if (token.trim() === "") {
      setMessage("Please enter your revalidation token")
      setStatus("error")
      return
    }

    // We're just storing the token for later use, not validating it yet
    setIsAuthenticated(true)
    setMessage("Token saved for revalidation requests")
    setStatus("success")
  }

  const handleRevalidate = async () => {
    const pathToRevalidate = selectedPath || customPath

    if (!pathToRevalidate) {
      setMessage("Please select or enter a path to revalidate")
      setStatus("error")
      return
    }

    if (!pathToRevalidate.startsWith("/")) {
      setMessage("Path must start with /")
      setStatus("error")
      return
    }

    setStatus("loading")
    setMessage(`Revalidating ${pathToRevalidate}...`)

    try {
      const response = await fetch("/api/revalidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: pathToRevalidate,
          token: token,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(`Successfully revalidated ${pathToRevalidate}`)
      } else {
        setStatus("error")
        setMessage(`Error: ${data.error || "Unknown error"}`)
      }
    } catch (error) {
      setStatus("error")
      setMessage(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }

  if (!isAuthenticated) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
          <CardDescription>Enter your revalidation token to access the console</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter your revalidation token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            {status !== "idle" && (
              <Alert variant={status === "error" ? "destructive" : "default"}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{status === "error" ? "Error" : "Info"}</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAuthenticate} className="w-full">
            Authenticate
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Revalidate Content</CardTitle>
        <CardDescription>Select a path to revalidate or enter a custom path</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="common">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="common">Common Paths</TabsTrigger>
            <TabsTrigger value="custom">Custom Path</TabsTrigger>
          </TabsList>

          <TabsContent value="common" className="space-y-4">
            <div className="py-4">
              <Select onValueChange={setSelectedPath}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a path to revalidate" />
                </SelectTrigger>
                <SelectContent>
                  {commonPaths.map((path) => (
                    <SelectItem key={path.value} value={path.value}>
                      {path.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <div className="py-4">
              <Input
                placeholder="Enter path (e.g., /resources/article-slug)"
                value={customPath}
                onChange={(e) => setCustomPath(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-2">
                Path must start with / (e.g., /resources/article-slug)
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {status !== "idle" && (
          <Alert
            variant={status === "error" ? "destructive" : status === "success" ? "default" : "default"}
            className="mt-4"
          >
            {status === "success" && <CheckCircle className="h-4 w-4" />}
            {status === "error" && <AlertCircle className="h-4 w-4" />}
            {status === "loading" && <RefreshCw className="h-4 w-4 animate-spin" />}
            <AlertTitle>{status === "success" ? "Success" : status === "error" ? "Error" : "Processing"}</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => {
            setStatus("idle")
            setSelectedPath("")
            setCustomPath("")
          }}
        >
          Reset
        </Button>
        <Button onClick={handleRevalidate} disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Revalidating...
            </>
          ) : (
            "Revalidate"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
