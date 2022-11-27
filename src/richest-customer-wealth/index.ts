export function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map(account => account.reduce((sum, money) => sum + money)))
}
