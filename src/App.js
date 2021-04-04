import React from 'react'
import {useState, useEffect} from 'react'
import OrderToggle from './OrderToggle'
import MovieList from './MovieList'
import PageNumber from './PageNumber'
import movieService from './service/movieService'

const App = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    useEffect(async () => {
        const newData = await movieService.getMovie(query)
        setData(newData)
    }, [query])

    const headerStyle = {
        textAlign: "center",
        fontFamily: "Roboto Condensed",
        paddingTop: "2rem"
    }

    return (
        <div>
            <div>
                <h1 style={headerStyle}>BingingTimes finds you the best movie from NYtimes</h1>
                <OrderToggle query={query} setQuery={setQuery} setData={setData} />
                <MovieList data={data} />
                <PageNumber query={query} setQuery={setQuery} setData={setData} />
            </div>
        </div>
    )
}

export default App;
