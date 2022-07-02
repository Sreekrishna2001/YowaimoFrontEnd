import React from "react";
import './AnimeCard.css'

export default function AnimeCard({ cover, name }) {
    return (
        <div className="card">
            <img className="card-img-top" src={'https://corsproxy.io/?'+cover} alt={name} />
            <div className="card-body">
                <p className="card-text">{name}</p>
            </div>
        </div>
    )
}