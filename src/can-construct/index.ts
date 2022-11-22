export function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length)
    return false

  const ransomNotes = ransomNote.split('')
  return ransomNotes.every((v) => {
    const flag = magazine.includes(v)
    if (flag)
      magazine = magazine.replace(v, '')
    return flag
  })
}
