import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchRequest } from '../../NetworkCalls/api'
import Episode from '../Episode/Episode';
import Loader from '../Loader/Loader';
import './AnimeInfo.css'

export default function AnimeInfo({type}) {
    let {animeName} = useParams()
    let {kdramaname} = useParams()
    if(type!=='animeinfo')animeName = kdramaname
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    const [animeInfo, setAnimeInfo] = useState(null)
    const [epno, setepno] = useState(1)

    useEffect(() => {
        const fetchInfo = async () => {
            setAnimeInfo((await searchRequest('GET', `${type}/${searchAnimeName}`))[0])
        }
        fetchInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const InfoUpperHalf = () => {
        return (
            <div className='container mt-3'>
                <h3>{animeName}</h3>
                <h3 className='text-center border-bottom mb-2'> Episode {epno}</h3>
                <div className='d-flex justify-content-between'>
                    {epno > 1 ? <span className='prev-next' onClick={() => setepno(epno - 1)}>&lt;&lt; Episode {epno - 1}</span> : <span></span>}
                    {epno < animeInfo.episodes_released && <span className='prev-next' onClick={() => setepno(epno + 1)}>Episode {epno + 1} &gt;&gt;</span>}
                </div>
                <Episode animeName={animeName} episodeNo={epno} type = {type}/>
                {type === 'animeinfo'?
                <><p className='text-danger'>Type: <span className='text-dark'>{animeInfo.type}</span></p>
                <p className='text-danger'>Plot Summary: <span className='text-dark'>{animeInfo.plot}</span></p>
                <p className='text-danger'>Genre: <span className='text-dark'>{animeInfo.genre}</span></p></>
                :<p className='text-danger'>Plot Summary: <span className='text-dark'>{animeInfo.summary}</span></p>
                }
            </div>
        )
    }

    const GetEpisodes = () => {
        return (
            [...Array(type === 'animeinfo'?animeInfo.episodes_released:animeInfo.total_episodes)].map((e, i) => <button key={i + 1} onClick={(e) => {
                window.scroll(0, 0)
                setepno(i + 1)
            }} className='btn btn-success col-md-2 col-6 m-1'>Episode - {i + 1}</button>)
        )
    }

    const PageLoader = () => {
        return (
            <div className='mt-3'>
                {animeInfo === null ? <Loader /> : ""}
            </div>
        )
    }

    return (
        <>
            <PageLoader />
            <div>
                {animeInfo !== null ? <InfoUpperHalf /> : ""}
                {animeInfo !== null ? <div className='text-center border-bottom mb-2'><h4>Episodes</h4></div> : ""}
                <div className='container text-center'>
                    {animeInfo !== null ? <GetEpisodes /> : ""}
                </div>
            </div>
        </>
    )
}
