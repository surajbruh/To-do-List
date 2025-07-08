export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
        return true
    } catch (error) {
        console.log(`setItem error ${error}`)
        return undefined
    }
}

export function getItem(key) {
    try {
        const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : undefined
    } catch (error) {
        console.log('getItem error')
        return undefined
    }
}

export function clearStorage() {
    try {
        window.localStorage.clear()
        window.location.reload()
        return true
    } catch (error) {
        console.log(`clearStorage error ${error}`)
        return false
    }
}

export function removeItem(key, value) {
    try {
        console.log(key, value)
        const arr = getItem(key).filter((item) => {
            if (item.id === !value) {
                return item
            }
        })
        setItem(key, arr)
        return true
    } catch (error) {
        console.log(`removeItem error ${error}`)
        return false
    }
}