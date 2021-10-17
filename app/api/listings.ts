import client from './client'

const apiEndPoint = "/listings"

const getListings = () => client.get(apiEndPoint);

export default  {
    getListings
}