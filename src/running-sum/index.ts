export function runningSum(nums: number[]): number[] {
  return nums.reduce((res: number[], v, i) => {
    res.push(i ? res[i - 1] + v : v)
    return res
  }, [])
}
