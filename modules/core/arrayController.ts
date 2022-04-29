
// observable.ts

export function find(value, array): boolean {
    if (array.includes(value) > -1) {
        return true
    } else {
        return false
    }
}