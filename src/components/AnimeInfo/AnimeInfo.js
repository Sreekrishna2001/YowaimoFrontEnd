import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchRequest } from '../../NetworkCalls/api'
import Episode from '../Episode/Episode';

export default function AnimeInfo() {
    const { animeName } = useParams()
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    const [animeInfo, setAnimeInfo] = useState(null)
    const [epno, setepno] = useState(1)

    useEffect(() => {
        const fetchInfo = async () => {
            setAnimeInfo((await searchRequest('GET', `animeinfo/${searchAnimeName}`))[0])
        }
        fetchInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const InfoUpperHalf = () => {
        return (
            <div className='container mt-3'>
                <h3>{animeName}</h3>
                <Episode animeName={animeName} episodeNo={epno} />
                <p className='text-danger'>Type: <span className='text-dark'>{animeInfo.type}</span></p>
                <p className='text-danger'>Plot Summary: <span className='text-dark'>{animeInfo.plot}</span></p>
                <p className='text-danger'>Genre: <span className='text-dark'>{animeInfo.genre}</span></p>
            </div>
        )
    }

    const GetEpisodes = () => {
        return (
            [...Array(animeInfo.episodes_released)].map((e, i) => <button key={i + 1} onClick={(e) => {
                window.scroll(0, 0)
                setepno(i + 1)
            }} className='btn btn-success col-md-2 m-1'>Episode - {i + 1}</button>)
        )
    }

    return (
        <div>
            {animeInfo !== null ? <InfoUpperHalf /> : ""}
            {animeInfo !== null ? <div className='text-center border-bottom mb-2'><h4>Episodes</h4></div> : ""}
            <div className='text-center'>
                {animeInfo !== null ? <GetEpisodes /> : ""}
            </div>
        </div>
    )
}
