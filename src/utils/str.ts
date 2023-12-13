export const isEmail = (value: string) => {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
}

export const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|¥|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
  return nums === '' ? null : Number.NaN
}

export const formatCurrency = (value: number | null) => {
  if (value === null) return ''
  return `${value.toLocaleString('en-US')} ¥`
}
