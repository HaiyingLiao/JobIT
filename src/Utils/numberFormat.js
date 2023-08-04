export const formatCurrency = (minSalary, maxSalary, currency) => {
  if (!minSalary || !maxSalary) return 'TBD'

  if (minSalary.length <= 3 || maxSalary.length <= 3) {
    return {
      min: minSalary,
      max: maxSalary
    }
  }

  const formatterMin = new Intl.NumberFormat(navigator.language, { notation: 'compact', currency })
  const formatterMax = new Intl.NumberFormat(navigator.language, { notation: 'compact', })

  return {
    min: formatterMin.format(minSalary),
    max: formatterMax.format(maxSalary)
  }
}