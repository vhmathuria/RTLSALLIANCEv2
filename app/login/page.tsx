export const metadata = {
  title: "Log In to RTLS Alliance | Member Access",
  description:
    "Log in to your RTLS Alliance account to access exclusive member resources, community features, and personalized content on real-time location systems.",
  keywords: "RTLS login, member access, account sign-in, RTLS Alliance members, secure login",
  alternates: {
    canonical: "/login",
  },
}

import LoginRedirectClient from "./LoginRedirectClient"

export default function LoginRedirect() {
  return <LoginRedirectClient />
}
