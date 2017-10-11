export default (expenses) => {
  return expenses.map(({ amount }) => {
    return amount
  }).reduce((current, next) => current + next, 0)
}
