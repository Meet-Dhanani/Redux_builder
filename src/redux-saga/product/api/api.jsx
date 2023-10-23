import axios from "axios"
import { BASE_URL, GET_API } from "../../constant"

export const getProduct = () => {
    return axios.get(BASE_URL + GET_API).then((res) => {
        const data = res.data
        const status = res.status

        return {
            data, status
        }
    }).catch(err => console.log(err))
}