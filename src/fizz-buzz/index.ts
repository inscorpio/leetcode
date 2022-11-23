export function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }).map((_, i) => {
    const answer = i + 1
    if (answer % 15 === 0)
      return 'FizzBuzz'
    if (answer % 3 === 0)
      return 'Fizz'
    if (answer % 5 === 0)
      return 'Buzz'
    return `${answer}`
  })
}
