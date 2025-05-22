import { supabase } from "@/lib/supabase"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export default async function AuthDebugPage() {
  // Get session from server
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Get cookies
  const cookieStore = cookies()
  const allCookies = cookieStore.getAll()
  const authCookies = allCookies.filter((cookie) => cookie.name.includes("supabase"))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Auth Debug Page</h1>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Server-Side Auth Status</h2>
        <p>
          <strong>Authenticated:</strong> {session ? "Yes" : "No"}
        </p>

        {session && (
          <div className="mt-4">
            <h3 className="font-semibold">User Info:</h3>
            <pre className="bg-gray-200 p-2 rounded mt-2 overflow-auto">{JSON.stringify(session.user, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Auth Cookies</h2>

        {authCookies.length > 0 ? (
          <ul className="list-disc list-inside">
            {authCookies.map((cookie) => (
              <li key={cookie.name}>
                <strong>{cookie.name}</strong>: {cookie.value.substring(0, 20)}...
              </li>
            ))}
          </ul>
        ) : (
          <p>No auth cookies found</p>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Client-Side Auth Status</h2>
        <p>Check the browser console for client-side auth status</p>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('Checking client-side auth status...');
              
              // Check if Supabase is available
              if (window.supabase) {
                window.supabase.auth.getSession().then(({ data, error }) => {
                  console.log('Client-side session:', data.session);
                  if (error) console.error('Error getting session:', error);
                });
              } else {
                console.log('Supabase client not available on window');
              }
              
              // Check localStorage
              try {
                const supabaseItems = Object.keys(localStorage)
                  .filter(key => key.includes('supabase'))
                  .reduce((obj, key) => {
                    obj[key] = localStorage.getItem(key);
                    return obj;
                  }, {});
                
                console.log('Supabase localStorage items:', supabaseItems);
              } catch (e) {
                console.error('Error checking localStorage:', e);
              }
            `,
          }}
        />
      </div>
    </div>
  )
}
