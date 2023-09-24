export function nameInEmail(email: string): string | null {
  const nameInEmail = email.match(/^([^@]*)@/)

  if (nameInEmail && nameInEmail.length > 1) {
    return nameInEmail[1]
  } else {
    return null
  }
}
