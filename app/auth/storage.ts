import * as SecureStore from 'expo-secure-store'

const key = "authToken"

const storageToken = async (value: any) => {
    try {
        
        return await SecureStore.setItemAsync(key, value)
    } catch (error) {
        console.log('Error in storaging the token', error)
    }
}

const getToken =  async () => {
    try {     
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.log('Error in getting the token', error)
    }
}

const removeToken = async  () => {
    try {
        return await SecureStore.deleteItemAsync(key)
        
    } catch (error) {
        console.log('Error in removing the token', error)
    }
}

export default {
    storageToken,
    getToken,
    removeToken
}