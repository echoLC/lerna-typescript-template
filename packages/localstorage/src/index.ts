
function parse<T> (data: any): T | null {
    try {
        return JSON.parse(data)
    } catch (err) {
        return null
    }
}

function stringify (data: any): string {
    return JSON.stringify(data)
}

function getValue<T> (key: string): T | null {
    const data = window.localStorage.getItem(key)
    return parse<T>(data)
}

function setValue (key: string, data: any) {
    window.localStorage.setItem(key, stringify(data))
}

function removeValue (key: string) {
    window.localStorage.removeItem(key)
}

interface LocalStorage {
    getValue<T> (key: string): T
    setValue(key: string, data: any): void
    removeValue(key: string): void
}

export default {
    getValue,
    setValue,
    removeValue
} as LocalStorage

