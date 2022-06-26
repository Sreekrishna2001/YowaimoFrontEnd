import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import { Link } from 'react-router-dom';
import AnimeCard from '../AnimeCard/AnimeCard'
import './Home.css'

export default function Home() {
  const [homepage, sethomepage] = useState([])
  useEffect(() => {
    const fetchDataa = async () => {
      sethomepage(await makeRequest('GET', ''))
    }
    fetchDataa()
  }, [])

  return (
    <div className='homeLayout'>
      {console.log("fwef")}
      {homepage.map(anime => <Link to={`anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.cover} name={anime.anime} /></Link>)}
    </div>
  )
}
