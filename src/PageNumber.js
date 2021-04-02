import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap' 
import movieService from './service/movieService'

const PageNumber = ({ setData }) => {
    const pages = [1,2,3,4]
    const openPage = async event => {
        const pageSelected = Number(event.target.text)
        const newData = await movieService.getMovie(`&offset=${(pageSelected-1)*20}`)
        console.log(newData)
        setData(newData)
    }

    return (
        <Pagination>
            {pages.map(pageNumber => (
                <Pagination.Item key={pageNumber} onClick={openPage}>
                    {pageNumber}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default PageNumber
