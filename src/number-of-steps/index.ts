export function numberOfSteps(num: number): number {
  let count = 0

  while (num) {
    if (num % 2 === 0)
      num /= 2
    else
      num -= 1

    count++
  }

  return count
}
