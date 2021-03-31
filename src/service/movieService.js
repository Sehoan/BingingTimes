import axios from 'axios'

const url = "https://api.nytimes.com/svc/movies/v2"
const end_point = "/reviews/picks.json?"
const api_key = "&api-key=0TYh7SlLme99I2NTyZ0Avv9Yk6i9Wv3t"

const getMovie = async query => {
    const response = await axios.get(url+end_point+query+api_key)

    return response.data.results
}

export default { getMovie }
