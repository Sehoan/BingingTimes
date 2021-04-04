import axios from 'axios'

const base_url = "https://api.nytimes.com/svc/movies/v2"
const end_point = "/reviews/picks.json?"
const api_key = "&api-key=0TYh7SlLme99I2NTyZ0Avv9Yk6i9Wv3t"

const getMovie = async query => {
    const url = base_url+end_point+query+api_key
    console.log(url)
    const response = await axios.get(url)

    return response.data.results
}

const requests = {
    getMovie
}

export default requests
