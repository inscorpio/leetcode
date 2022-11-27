import { maximumWealth } from '.'

describe(
  `
    You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i^th customer has in the j^th bank. Return the wealth that the richest customer has.
    A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
  `,
  () => {
    it('richest-customer-wealth', () => {
      expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).toBe(6)
      expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).toBe(10)
      expect(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).toBe(17)
    })
  },
)
