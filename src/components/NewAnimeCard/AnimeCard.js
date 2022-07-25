import React from "react";

export default function AnimeCard({ cover, name }) {
    return (
        <div className="anime-card">
            <div className="anime-card-img">
                <img src={'https://corsproxy.io/?'+encodeURIComponent(cover.replaceAll(' ','%20'))} alt={name}  />
            </div>
            <div className="anime-card-text" title={name}>
                {name}
            </div>
        </div>
    )
}