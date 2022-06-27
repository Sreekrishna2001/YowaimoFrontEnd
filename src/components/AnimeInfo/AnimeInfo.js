import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchRequest } from '../../NetworkCalls/api'
import { useNavigate } from 'react-router-dom';

export default function AnimeInfo() {
    const navigate = useNavigate();
    const { animeName } = useParams()
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    const [animeInfo, setAnimeInfo] = useState(null)

    useEffect(() => {
        const fetchInfo = async () => {
            setAnimeInfo((await searchRequest('GET', `animeinfo/${searchAnimeName}`))[0])
        }
        fetchInfo()
    })

    const InfoUpperHalf = () => {
        return (
            <div className='container mt-3'>
                <h3 className=''>{animeName}</h3>
                <p className='text-danger'>Type: <span className='text-dark'>{animeInfo.type}</span></p>
                <p className='text-danger'>Plot Summary: <span className='text-dark'>{animeInfo.plot}</span></p>
                <p className='text-danger'>Genre: <span className='text-dark'>{animeInfo.genre}</span></p>
            </div>
        )
    }

    const GetEpisodes = () => {
        return (
            [...Array(animeInfo.episodes_released)].map((e, i) => <button key={i + 1} onClick={(e) => { navigate(`${i + 1}`) }} className='btn btn-success col-md-2 m-1'>Episode - {i + 1}</button>)
        )
    }

    return (
        <div>
            {animeInfo !== null ? <InfoUpperHalf /> : ""}
            {animeInfo !== null ? <div className='text-center border-bottom mb-2'><h4>Episodes</h4></div> : ""}
            <div className='text-center mb-2'>
                {animeInfo !== null ? <GetEpisodes /> : ""}
            </div>
        </div>
    )
}
