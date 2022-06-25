import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchRequest } from "../../NetworkCalls/api";
import AnimeCard from '../AnimeCard/AnimeCard'
import '../Home/Home.css'

export default function SearchAnime() {
    const { animeName } = useParams();
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setSearchData(await searchRequest('GET', `search/${animeName}`))
        }
        fetchData()
    })

    return (
        <>
            <div className="text-center border-bottom mb-2 bg-dark"><h3 className="text-white">Search Results</h3></div>
            <div className='homeLayout'>
                {searchData.map(anime => <AnimeCard key={anime.anime} cover={anime.thumbnail} name={anime.anime} />)}
            </div>
        </>
    )
}
