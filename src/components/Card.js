import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link className='card' to={`/oceania/${props.country.cca3}`}>
      <h3>{props.country.name.common}</h3>
        <img src={props.country.flags.png} alt={props.country.name.official} />
    </Link>
  )

}

export default Card