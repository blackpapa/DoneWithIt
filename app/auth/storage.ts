import * as SecureStore from 'expo-secure-store'

const storageToken = (key: any, value: any) => {
    return SecureStore.setItemAsync(key, value)
}

const getToken = (key: any) => {
    return SecureStore.getItemAsync(key)
}

const removeToken = (key: any) => {
    return SecureStore.deleteItemAsync(key)
}

export default {
    storageToken,
    getToken,
    removeToken
}