export const sleep = (s: number) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((r) => {
    setTimeout(() => {
      r(1)
    }, s)
  })
}
