"use client"

import { redirect } from "next/navigation"

export default function LoginPage() {
  redirect("/auth?tab=login")
  return null
}
