import React from 'react'

function AnimeCard({ cover, name }) {
  return (
    <div>
      <img src={cover} alt={name} height='170px' width='130px' />
      <p>{name}</p>
    </div>
  )
}

export default AnimeCard