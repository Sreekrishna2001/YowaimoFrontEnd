import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL_DEPLOYED } from '../../NetworkCalls/api';
import './Episode.css'

export default function Episode({ animeName, episodeNo }) {
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    const url = `${BASE_URL_DEPLOYED}${searchAnimeName}/${episodeNo}`;

    return (
        <>
            <h3 className='border-bottom mb-2'> Episode {episodeNo}</h3>
            <iframe src={url} title={animeName} scrolling='no' allowFullScreen width="900px" height= "600px"></iframe>
        </>
    )
}