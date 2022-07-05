import React from "react";
import { BASE_URL_DEPLOYED } from '../../NetworkCalls/api';
import './Episode.css'

export default function Episode({ animeName, episodeNo ,type}) {
    let searchAnimeName = animeName.replace(/[^a-z0-9 -]/gi, '')
    searchAnimeName = searchAnimeName.replaceAll(' ', '-')
    let url;
    type === 'animeinfo'?url = `${BASE_URL_DEPLOYED}${searchAnimeName}/${episodeNo}`:url = `${BASE_URL_DEPLOYED}kdrama/${searchAnimeName}/${episodeNo}`

    return (
        <div className="ifrwrapper">
            <iframe className="ifrclass" src={url} title={animeName} scrolling='no' allowFullScreen frameBorder='0'></iframe>
        </div>
    )
}