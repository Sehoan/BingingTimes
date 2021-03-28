import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const url = "https://api.nytimes.com/svc/movies/v2"
const api_key = "0TYh7SlLme99I2NTyZ0Avv9Yk6i9Wv3t"
const end_point = "/reviews/picks.json?"

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(url + end_point + `&api-key=${api_key}`)
            .then(response => {
                setData(response.data.results)
            })
    }, [])

    return (
        <div>
            <h1 style={{textAlign: "center"}}>BingingTimes finds you the best movie from NYtimes</h1>
            <ol>
                {data.map(movie => {
                    if (movie.display_title.localeCompare("") !== 0) {
                        return (
                            <li key={movie.display_title}>
                                <p>{movie.display_title}</p>
                                <p>{movie.headline}</p>
                                <img src={movie.multimedia.src} alt="movie scene" />
                                <p style={{color: "grey"}}>{movie.summary_short}</p>
                                For more info about the movie, click 
                                <a href={movie.link.url}> link</a>
                            </li>
                        )
                    }
                })}

            </ol>
        </div>
    )
}

export default App;
