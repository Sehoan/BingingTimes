import React from 'react'
import {useState, useEffect} from 'react'
import OrderToggle from './OrderToggle'
import MovieList from './MovieList'
import PageNumber from './PageNumber'
import movieService from './service/movieService'

const App = () => {
    const [data, setData] = useState([])

    useEffect(async () => {
        const newData = await movieService.getMovie('')
        setData(newData)
    }, [])


    return (
        <div>
            <h1 style={{textAlign: "center"}}>BingingTimes finds you the best movie from NYtimes</h1>
            <OrderToggle setData={setData}/> 
            <MovieList data={data} />
            <PageNumber setData={setData} />
        </div>
    )
}

export default App;

/*
 * Things to add:
 * when selecting different page, ordering property is overriden
 * lift state, show in OrderToggle, up so the value can be ussed in pageNumber 
 */
