import React from 'react'
import {useState, useEffect} from 'react'
import MovieList from './MovieList'
import movieService from './service/movieService'
import Button from 'react-bootstrap/Button'

const App = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const newData = await movieService.getMovie('')
        setData(newData)
        console.log(newData)
    }, [])

    const orderPublic = async event => {
        const newData = await movieService.getMovie('&order=by-publication-date')
        setData(newData)
    }

    const orderOpening = async event => {
        const newData = await movieService.getMovie('&order=by-opening-date')
        setData(newData)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>BingingTimes finds you the best movie from NYtimes</h1>
            Order by 
            <button type="button" onClick={orderPublic}> publication date</button>
            <button type="button" onClick={orderOpening}> opening date</button>
            <MovieList data={data} />
        </div>
    )
}

export default App;

/*
 * Things to add:
 * CSS Styling with Bootstrap
 */
