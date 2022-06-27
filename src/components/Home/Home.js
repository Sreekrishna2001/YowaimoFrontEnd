import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import { Link } from 'react-router-dom';
import AnimeCard from '../NewAnimeCard/AnimeCard'
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
    <div className='row m-0'>
      {homepage.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.anime}> <Link to={`anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.cover} name={anime.anime} /></Link> </div>)}
    </div>
  )
}
