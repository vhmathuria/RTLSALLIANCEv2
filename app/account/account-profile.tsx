import type React from "react"
import { RefreshMembershipButton } from "@/components/refresh-membership-button"

interface AccountProfileProps {
  user: {
    id: string
    name: string
    email: string
    membershipStatus: string
  }
}

const AccountProfile: React.FC<AccountProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>Account Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Membership Status: {user.membershipStatus}</p>
      {/* Add this after the membership status display */}
      <div className="mt-2">
        <RefreshMembershipButton userId={user.id} />
      </div>
    </div>
  )
}

export default AccountProfile
