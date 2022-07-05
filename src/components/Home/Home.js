import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import { Link } from 'react-router-dom';
import AnimeCard from '../NewAnimeCard/AnimeCard'
import Loader from '../Loader/Loader'
import './Home.css'

export default function Home({route}) {
  const [homepage, sethomepage] = useState([])
  useEffect(() => {
    const fetchDataa = async () => {
      sethomepage(route==='/'?JSON.parse(await makeRequest('GET', route)):await makeRequest('GET', route))
    }
    fetchDataa()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {route==='/'?homepage.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.anime}> <Link to={`anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.cover} name={anime.anime} /></Link> </div>)
        :homepage.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.drama}> <Link to={`${anime.drama}`}><AnimeCard key={anime.drama} cover={anime.cover} name={anime.drama} /></Link> </div>)}
      </div>
    </>
  )
}
