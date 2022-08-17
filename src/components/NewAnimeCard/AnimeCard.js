import React from "react";

export default function AnimeCard({ cover, name }) {
    return (
        <div className="lg:w-56 lg:h-80 w-24 h-36">
                <img className="rounded-xl lg:hover:blur-sm lg:w-56 lg:h-80 w-24 h-36 object-cover hover:cursor-pointer lg:hover:h-72 lg:hover:w-52 hover:transition duration-100" src={'https://corsproxy.io/?'+encodeURIComponent(cover.replaceAll(' ','%20'))} alt={name}  />
            <p className="truncate ..." title={name}>
                {name}
            </p>
        </div>
    )
} 