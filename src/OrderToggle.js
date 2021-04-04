import React from 'react'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import movieService from './service/movieService'

const OrderToggle = ({ query, setQuery, setData }) => {
    const [show, setShow] = useState(true) 

    const orderPublic = async event => {
        let newQuery = ''
        if(query.includes('order')) {
            newQuery = query.replace('opening','publication')
        }else {
            newQuery = query + '&order=by-publication-date'
        }
        setQuery(newQuery)
        const newData = await movieService.getMovie(newQuery)
        setData(newData)
        setShow(true)
    }

    const orderOpening = async event => {
        let newQuery = ''
        if(query.includes('order')) {
            newQuery = query.replace('publication','opening')
        }else {
            newQuery = query + '&order=by-opening-date'
        }
        setQuery(newQuery)
        const newData = await movieService.getMovie(newQuery)
        setData(newData)
        setShow(false)
    }

    return (
        <DropdownButton variant="outline-primary" title="Order by" style={{padding:"1rem"}}>
            <Dropdown.Item active={show} onClick={orderPublic}>
                Publication date
            </Dropdown.Item>
            <Dropdown.Item active={!show} onClick={orderOpening}>
                Opening date
            </Dropdown.Item>
        </DropdownButton>

    )
} 

export default OrderToggle
