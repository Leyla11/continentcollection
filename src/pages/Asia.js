import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Asia = () => {
    const [countries, setCountries] = useState([])
    const traerCountries = async () => {
        try {
            let response = await axios.get("https://restcountries.com/v3.1/region/asia")
            console.log(response)
            let datos = response.data
            setCountries(datos)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        traerCountries()
    }, [])

    return (
        <div>
            <h2>COUNTRIES OF ASIA</h2>
            <div className="container">
                {countries.map(country => (
                    <Card key={country.cca2} country={country} />
                ))}
            </div>
        </div>
    )



}

export default Asia


