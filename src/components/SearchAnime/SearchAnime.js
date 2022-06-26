import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
            <div className="text-center"><h4>{searchData.length === 0 ? "No Results Found" : ""}</h4></div>
            <div className='homeLayout'>
                {searchData.map(anime => <Link to={`../../anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.thumbnail} name={anime.anime} /></Link>)}
            </div>
        </>
    )
}
