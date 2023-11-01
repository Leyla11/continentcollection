import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'


const Oceania = () => {
    
    const [countries, setCountries] = useState([])
    const traerCountries = async () => {
        try {
            let response = await axios.get(`https://restcountries.com/v3.1/region/oceania`)
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
            <h2>COUNTRIES OF OCEANIA</h2>
            <div className="container">
                    {countries.map(country => (
                        <Card key={country.cca2} country={country} />
                    ))}
                    </div>
        </div>
    )
}

export default Oceania