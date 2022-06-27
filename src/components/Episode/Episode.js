import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL_DEPLOYED } from '../../NetworkCalls/api';
import './Episode.css'

export default function Episode() {
    const { animeName, episodeNo } = useParams()
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    const url = `${BASE_URL_DEPLOYED}${searchAnimeName}/${episodeNo}`;

    return (
        <div className='container mt-3'>
            <h3 className='border-bottom mb-2'>{animeName} Episode {episodeNo}</h3>
            <div className="text-center"><iframe className="episode-iframe" src={url} title={animeName}></iframe></div>
        </div>
    )
}