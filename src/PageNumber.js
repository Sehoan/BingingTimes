import React from 'react'
import {useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PageNumber = ({ query, setQuery }) => {
    const [activePage, setActivePage] = useState(1)

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
        setActivePage(pageSelected)
    }

    return (
        <Pagination style={{paddingLeft:"1rem"}}>
            {pages.map(pageNumber => (
                <Pagination.Item active={pageNumber===activePage} key={pageNumber} onClick={openPage}>
                    {pageNumber}
                </Pagination.Item>
            ))}
        </Pagination>
    )
}

export default PageNumber
