import React, { useState, useEffect } from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import '../bootstrap.min.css'

const Homescreen = () => {

    

    const fetchLocation = async () => {
        const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&appid=d2c2486e20d06992f71d93db280406df`)
        console.log(data)
        console.log(city)
        console.log(stateCode)
        setProduct(data)
    }

    const [product, setProduct] = useState([])
    const [city, setCity] = useState('')
    const [stateCode, setStateCode] = useState('')
    const [countryCode, setCountryCode] = useState('')


    const handleCitySelect = (event) => {
        setCity(event.target.value)
    }

    const handleStateSelect = (event) => {
        setStateCode(event.target.value)
    }


    const handleCountrySelect = (event) => {
        setCountryCode(event.target.value)
    }

    useEffect(()=> {

    })

    

  return (
    <div>
        <Container>
            <h1>City Search</h1>
            <form className='my-4' onSubmit={fetchLocation}>
                <label for='city name' className='citynamelabel'>City:</label><br />
                <input type='text' className='citynameinput' name='city name' onChange={handleCitySelect}/><br />
                <label for='state code' className='statecodelabel'>State Code (US Only):</label><br />
                <input type='text' className='statecodeinput' name='state code' onChange={handleStateSelect}/><br />
                <label for='country code' className='countrycodelabel'>Country Code:</label><br />
                <input type='text' className='countrycodeinput' name='country code' onChange={handleCountrySelect} /><br /><br />
                <input type='submit' id='submit' name='submit' className='btn btn-dark' />
            </form>

        </Container>

        <h4>{city}</h4>
        <h4>{stateCode}</h4>
        <h4>{product[0].name}</h4>
    </div>
  )
}





export default Homescreen