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
            <>
                <div className="current-anime-short-info">
                    {animeName} <sub>Episode - {epno}</sub>
                </div>
                <div className="watch-episode">
                    <div className="current-anime-episode-tracks">
                        {epno > 1 ? 
                            <button className="episode-track" onClick={() => setepno(epno - 1)}>
                                <span className="material-icons previous"> double_arrow </span>
                                <span>Episode - {epno - 1}</span>
                            </button>
                            : ""   
                        }
                        {epno < animeInfo.episodes_released && 
                            <button className="episode-track" onClick={() => setepno(epno + 1)}>
                                <span>Episode - {epno + 1}</span>
                                <span className="material-icons next"> double_arrow </span>
                            </button>
                        }
                    </div>
                    <div className="current-anime-watch-episode">
                        {/* <video controls>
                            <source src="" type="video/mp4" />
                        </video> */}
                        <Episode animeName={animeName} episodeNo={epno} type = {type}/>
                    </div>
                </div>

                {type === 'animeinfo'?
                    <div className="current-anime-info">
                        <div className="anime-summary">
                            <div className="anime-summary-title">
                                Plot Summary
                            </div> 
                            <div className="anime-summary-content">
                                {animeInfo.plot.replace(/Plot Summary:/g, '')}
                            </div>
                        </div>
                        <div className="current-anime-type">
                            <div className="anime-type-title">
                                Type
                            </div>
                            <div className="anime-type-content">
                                {animeInfo.type}
                            </div>
                        </div>
                        <div className="current-anime-genre">
                            <div className="anime-genre-title">
                                Genre
                            </div> 
                            <div className="anime-genre-content">
                                {animeInfo.genre.split(',').map((genre, index) => {
                                    if(genre.includes('Genre: '))genre = genre.replace('Genre: ', '')
                                    return <button className="current-anime-each-genre" key={index}>{genre}</button>
                                })}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="anime-summary">
                        <div className="anime-summary-title">
                            Plot Summary
                        </div> 
                        <div className="anime-summary-content">
                            {animeInfo.summary.replace(/Plot Summary:/g, '')}
                        </div>
                    </div>
                }
            </>
        )
    }

    const GetEpisodes = () => {
        return (
            [...Array(type === 'animeinfo'?animeInfo.episodes_released:animeInfo.total_episodes)].map((e, i) => 
            <button key={i + 1} onClick={(e) => {
                window.scroll(0, 0)
                setepno(i + 1)
            }} className="episode-number">Episode - {i + 1}</button>)
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
            <section className="anime-episode-info-list">
                {animeInfo !== null ? <InfoUpperHalf /> : ""}
                <div className="episodes-list">
                    {animeInfo !== null ? <div className="episode-list-title"> Episodes </div> : ""}
                    <div className="episode-list-content">
                        {animeInfo !== null ? <GetEpisodes /> : ""}
                    </div>
                </div>
            </section>
        </>
    )
}
