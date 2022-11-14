import axios from "@/utils/axios";

const getData = () => {
    return axios.get('/testData')
}

export default {
    getData
}