import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import movieService from './service/movieService'

const PageNumber = ({ query, setQuery, setData }) => {
    const pages = [1,2,3,4]
    const openPage = async event => {
        let newQuery = ''
        const pageSelected = Number(event.target.text)
        if(query.includes('offset')) {
            newQuery = query.replace(/offset=[0-9]+/,`offset=${(pageSelected-1)*20}`)
        }else {
            newQuery = query + `&offset=${(pageSelected-1)*20}`
        }
        setQuery(newQuery)
        const newData = await movieService.getMovie(newQuery)
        setData(newData)
    }

    return (
        <Pagination style={{paddingLeft:"1rem"}}>
            {pages.map(pageNumber => (
                <Pagination.Item key={pageNumber} onClick={openPage}>
                    {pageNumber}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default PageNumber
