import { canConstruct } from './index'

describe(
  `Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
   Each letter in magazine can only be used once in ransomNote.`,
  () => {
    it('can-construct', () => {
      expect(canConstruct('a', 'b')).toBe(false)
      expect(canConstruct('aa', 'ab')).toBe(false)
      expect(canConstruct('aa', 'aab')).toBe(true)
      expect(canConstruct('abc', 'cb')).toBe(false)
    })
  })
