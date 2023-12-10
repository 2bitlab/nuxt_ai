import { isObject } from 'lodash-es'
export const fixEmptyKey = (obj: any): any => {
  if (obj === '' || obj === null) {
    return undefined
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return undefined
    }

    return obj.map((item: any) => {
      if (isObject(item)) {
        return fixEmptyKey(item) || {}
      }

      return item
    })
  }
  if (isObject(obj)) {
    const keys = Object.keys(obj)
    if (keys.length === 0) {
      return undefined
    }

    keys.forEach((key) => {
      const val = (obj as any)[key]
      ;(obj as any)[key] = fixEmptyKey(val)
    })

    const newObj = JSON.parse(JSON.stringify(obj))
    const newKeys = Object.keys(newObj)
    if (newKeys.length === 0) {
      return undefined
    }
  }

  return obj
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('fixEmptyKey', () => {
    expect(fixEmptyKey('a')).toBe('a')
    expect(fixEmptyKey('')).toBe(undefined)
    expect(fixEmptyKey(null)).toBe(undefined)
    expect(fixEmptyKey([])).toBe(undefined)
    expect(fixEmptyKey({})).toBe(undefined)
    expect(fixEmptyKey(1)).toBe(1)
    expect(fixEmptyKey(true)).toBe(true)
    expect(fixEmptyKey(false)).toBe(false)
    expect(JSON.stringify(fixEmptyKey({ a: 1 }))).toBe(JSON.stringify({ a: 1 }))
    expect(JSON.stringify(fixEmptyKey({ a: '' }))).toBe(JSON.stringify(undefined))
    expect(JSON.stringify(fixEmptyKey({ a: null }))).toBe(JSON.stringify(undefined))
    expect(
      JSON.stringify(
        fixEmptyKey({
          a: {
            b: 1,
          },
        })
      )
    ).toBe(
      JSON.stringify({
        a: {
          b: 1,
        },
      })
    )

    expect(
      JSON.stringify(
        fixEmptyKey({
          a: {
            b: '',
          },
        })
      )
    ).toBe(JSON.stringify(undefined))
    expect(
      JSON.stringify(
        fixEmptyKey({
          a: {
            b: null,
          },
        })
      )
    ).toBe(JSON.stringify(undefined))

    expect(JSON.stringify(fixEmptyKey(['']))).toBe(JSON.stringify(['']))
    expect(JSON.stringify(fixEmptyKey([null]))).toBe(JSON.stringify([null]))
    expect(JSON.stringify(fixEmptyKey([{ a: 1 }]))).toBe(JSON.stringify([{ a: 1 }]))
    expect(JSON.stringify(fixEmptyKey([{ a: '' }]))).toBe(JSON.stringify([{}]))
  })
}

export const setResValue2Form = (form: any, res: any) => {
  console.log('setResValue2Form form', form, 'res', res)

  if (res) {
    Object.keys(form).forEach((key) => {
      const val = (res as any)[key]
      const oldVal = (form as any)[key]

      console.log('setResValue2Form key', key, 'val', val, 'oldVal', oldVal)
      if (val !== undefined && JSON.stringify(val) !== JSON.stringify(oldVal)) {
        ;(form as any)[key] = val
      }
    })
  }
}
