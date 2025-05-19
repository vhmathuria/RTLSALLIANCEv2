import MembershipDebug from "./membership-debug"

export default function AccountPage() {
  return (
    <div>
      <h1>Account Page</h1>
      {/* Account Profile Component Here */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Membership Diagnostics</h2>
        <MembershipDebug />
      </div>
    </div>
  )
}
