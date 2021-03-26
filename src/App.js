import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const url = "https://api.nytimes.com/svc/movies/v2"
const api_key = "0TYh7SlLme99I2NTyZ0Avv9Yk6i9Wv3t"

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url + "/critics/all.json?" + `&api-key=${api_key}`)
            .then(response => {
                setData(response.data.results)
            })
    }, [])

    return (
        <div>
            <h1>bingingTimes finds you the best movie from NYtimes</h1>
            <ul>
                {data.map(movie => (
                    <li key={movie.display_name}>
                        {movie.display_name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App;
