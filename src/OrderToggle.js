import React from 'react'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import movieService from './service/movieService'

const OrderToggle = ({ setData }) => {
    const [show, setShow] = useState(true) 

    const orderPublic = async event => {
        const newData = await movieService.getMovie('&order=by-publication-date')
        setData(newData)
        setShow(true)
    }

    const orderOpening = async event => {
        const newData = await movieService.getMovie('&order=by-opening-date')
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
