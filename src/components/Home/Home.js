import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import AnimeCard from '../AnimeCard/AnimeCard'
import './Home.css'

export default function Home() {
    const [homepage,sethomepage] = useState([])
    useEffect(()=>{
        const fetchDataa = async()=>{
            sethomepage(await makeRequest('GET',''))
        }
        fetchDataa()
    },[])

  return (
    <div className='homeLayout'>
        {homepage.map(anime=><AnimeCard cover={anime.cover} name={anime.anime}/>)}
    </div>
  )
}
