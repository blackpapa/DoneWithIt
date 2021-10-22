import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

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

const getUser = async () => {
    const token = await getToken()
    if (!token) return null;

    return jwtDecode(token) 
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
    getUser,
    removeToken,
    getToken
}