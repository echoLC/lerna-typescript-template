declare module 'localstorage' {
  interface LocalStorage {
    getValue<T> (key: string): T
    setValue(key: string, data: any): void
    removeValue(key: string): void
  }
  export default LocalStorage
}