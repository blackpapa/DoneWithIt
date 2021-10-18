import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://192.168.20.45:9000/api"
})

export default apiClient