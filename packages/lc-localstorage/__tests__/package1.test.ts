import LocalStorage from '../src'

const DEFAULT_KEY = 'JEST-TEST'

type ObjType = {
  [key: string]: any
}

describe('LocalStorage utils:getValue', () => {
  it('if not save value to storage, it should return null', () => {
    expect(LocalStorage.getValue < null > (DEFAULT_KEY)).toBe(null)
  })  
  it('if save value to storage, it should return match value', () => {
    LocalStorage.setValue(DEFAULT_KEY, '123')
    expect(LocalStorage.getValue < string > (DEFAULT_KEY)).toBe('123')
  })  
  it('if save object value to storage, it should return match value', () => {
    const obj = {
      jest: 123
    }
    LocalStorage.setValue(DEFAULT_KEY, obj)
    const data = LocalStorage.getValue < ObjType > (DEFAULT_KEY)
    expect(data).toEqual(obj)
  })
})