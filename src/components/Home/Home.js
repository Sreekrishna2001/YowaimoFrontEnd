import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import { Link } from 'react-router-dom';
import AnimeCard from '../NewAnimeCard/AnimeCard'
import './Home.css'
import Loader from '../Loader/Loader'

export default function Home() {
  const [homepage, sethomepage] = useState([])
  useEffect(() => {
    const fetchDataa = async () => {
      sethomepage(await makeRequest('GET', ''))
    }
    fetchDataa()
  }, [])

  const PageLoader = () => {
    const length = homepage.length;
    return (
      <>
        {length === 0 ? <Loader /> : ""}
      </>
    )
  }

  return (
    <>
      < PageLoader />
      <div className='row m-0 mt-2'>
        {homepage.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.anime}> <Link to={`anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.cover} name={anime.anime} /></Link> </div>)}
      </div>
    </>
  )
}
