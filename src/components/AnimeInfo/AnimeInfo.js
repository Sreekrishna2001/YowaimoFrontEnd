import React, { useEffect, useState } from 'react'
import { makeRequest } from '../../NetworkCalls/api'
import AnimeCard from '../AnimeCard/AnimeCard'
function AnimeInfo({name}) {
    const [AnimeInfo,setAnimeInfo] = useState()
    useEffect(()=>{
        const fetchInfo = async()=>{
            setAnimeInfo(await makeRequest('GET',`animeinfo/${name}`)[0] )
        }
        fetchInfo()
    },[])

    const EpButton = (epNo)=>{
        return (
            <div>
                <button className='EpButton'>{epNo}</button>
            </div>
        )
    }
    const InfoUpperHalf = ()=>{
        return (
            <div>
                {/* <AnimeCard cover={} name={} /> */}
                <div>
                    <p>{AnimeInfo.type}</p>
                    <p>{AnimeInfo.plot}</p>
                    <p>{AnimeInfo.genre}</p>
                </div>
            </div>
        )
    }
  return (
    <div>
        <InfoUpperHalf />
    </div>
  )
}

export default AnimeInfo