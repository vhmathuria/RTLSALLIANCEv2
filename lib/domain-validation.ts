"use server"

// List of common corporate domain patterns and free email providers to exclude
const FREE_EMAIL_PROVIDERS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "protonmail.com",
  "mail.com",
  "yandex.com",
  "zoho.com",
  "tutanota.com",
  "fastmail.com",
  "gmx.com",
  "live.com",
  "msn.com",
  "me.com",
  "mac.com",
]

// Common educational domains (usually not corporate)
const EDUCATIONAL_DOMAINS = [".edu", ".ac.uk", ".edu.au", ".ac.in", ".edu.cn"]

export function isCorporateDomain(email: string): boolean {
  if (!email || !email.includes("@")) {
    return false
  }

  const domain = email.toLowerCase().split("@")[1]

  if (!domain) {
    return false
  }

  // Check if it's a free email provider
  if (FREE_EMAIL_PROVIDERS.includes(domain)) {
    return false
  }

  // Check if it's an educational domain
  if (EDUCATIONAL_DOMAINS.some((eduDomain) => domain.endsWith(eduDomain))) {
    return false
  }

  // Check if domain has proper structure (at least one dot and valid TLD)
  const domainParts = domain.split(".")
  if (domainParts.length < 2) {
    return false
  }

  // Check for valid TLD (at least 2 characters)
  const tld = domainParts[domainParts.length - 1]
  if (tld.length < 2) {
    return false
  }

  // If it passes all checks, consider it a corporate domain
  return true
}

export function getCorporateDomainMessage(email: string): string {
  if (!email) {
    return "Please provide a valid email address."
  }

  if (!isCorporateDomain(email)) {
    return "Please use your corporate email address to create bids. Personal email addresses (Gmail, Yahoo, etc.) are not allowed for bid submissions."
  }

  return ""
}
