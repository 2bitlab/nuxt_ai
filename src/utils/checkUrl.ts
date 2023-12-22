export class CheckUrl {
  checkUrlCount = 0

  constructor() {
    this.checkUrlCount = 0
  }

  check = async (url: string) => {
    this.checkUrlCount++
    try {
      const res = await $fetch(url)
      console.log('checkUrl res', res)
      return res
    } catch (error) {
      console.error('checkUrl', url, error)

      if (this.checkUrlCount > 10) {
        this.checkUrlCount = 0
        return false
      }

      await sleep(2000)
      return await this.check(url)
    }
  }
}
