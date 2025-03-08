import React from 'react'
import './Card.css'
export default function Card({ img, title, number }) {
  return (
    <div className='card-main'>
      <img src={img} alt='img' />
      <div className='card-data'>
        <p>{title}</p>
        <h1>{number}</h1>
      </div>
    </div>
  )
}
