import React from "react";

export default function AnimeCard({ cover, name }) {
    return (
        <div className="w-56 h-80">
                <img className="rounded-xl w-56 h-80 hover:blur-sm hover:cursor-pointer hover:h-72 hover:w-52 hover:transition duration-200" src={'https://corsproxy.io/?'+encodeURIComponent(cover.replaceAll(' ','%20'))} alt={name}  />
            <p className="truncate ..." title={name}>
                {name}
            </p>
        </div>
    )
} 