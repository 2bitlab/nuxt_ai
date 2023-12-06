export const getHost = (url: string) => {
  // 正则表达式匹配URL中的域名部分
  const expression = /[^:/?#]+:\/\/([^/?#]+)/
  const regex = new RegExp(expression)
  const match = regex.exec(url)

  if (match !== null) {
    // 提取匹配结果中的域名部分
    return match[1]
  } else {
    return ''
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('getHost', () => {
    expect(getHost('http://a.com')).toBe('a.com')
    expect(getHost('http://a.com/b')).toBe('a.com')
    expect(getHost('https://a.com/b')).toBe('a.com')
  })
}

export const checkIsHost = (host: string, url: string) => {
  const [, urlPath] = url.split('://')

  console.log('checkIsHost host', host, 'urlPath', urlPath)
  return urlPath === host || urlPath === `${host}/`
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('checkIsHost', () => {
    expect(checkIsHost('a.com', 'http://a.com')).toBe(true)
    expect(checkIsHost('a.com', 'https://a.com')).toBe(true)
    expect(checkIsHost('a.com', 'https://a.com/b')).toBe(false)

    expect(checkIsHost('a.com', 'http://a.com/')).toBe(true)
    expect(checkIsHost('a.com', 'https://a.com/')).toBe(true)
    expect(checkIsHost('a.com', 'https://a.com/b/')).toBe(false)
  })
}
