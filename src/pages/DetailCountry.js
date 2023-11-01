import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const DetailCountry = () => {
  const { idCountry } = useParams()
  const [country, setCountry] = useState([])
  const [showData, setShowData] = useState(false)



  const traerCountry = async () => {
    try {
      let response = await axios.get(`https://restcountries.com/v3.1/alpha/${idCountry}`)
      let datos = response.data
      setCountry(datos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    traerCountry()
  }, [])

  const changeshowData = () => {
    setShowData(!showData)
  }

  return (
    <div>{country.map(country => (
      <div className="detailcontainer" key={country.ccn3}>
        <h3>{country.name.common}</h3>
        <p>Official name: {country.name.official}</p>
        <p>Capital: {country.capital}</p>
        <a href={country.maps.googleMaps} target='_blank' rel="noreferrer">View on Google Maps</a>
        <p>Populaton: {country.population}</p>
        <h3>Official flag:</h3>
        <img onClick={() => changeshowData()} src={country.flags.png} alt={country.name.official} />
        {showData && (<p>{country.flags.alt}</p>)}
        <h3>Coat of arms:</h3>
        <img src={country.coatOfArms.png} alt={country.name.official} />
        {country.coatOfArms.alt && <p>{country.coatOfArms.alt}</p>}
      </div>

    ))}

    </div>
  )
}

export default DetailCountry