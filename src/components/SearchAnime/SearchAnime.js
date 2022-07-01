import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { searchRequest } from "../../NetworkCalls/api";
import AnimeCard from '../NewAnimeCard/AnimeCard'
import Loader from '../Loader/Loader'
import '../Home/Home.css'

export default function SearchAnime() {
    const { animeName } = useParams();
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setSearchData(await searchRequest('GET', `search/${animeName}`))
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const PageLoader = () => {
        const length = searchData.length;
        return (
            <>
                {length === 0 ? <Loader /> : ""}
            </>
        )
    }

    return (
        <>
            <PageLoader />
            <div className="text-center border-bottom mb-2 bg-dark"><h3 className="text-white">Search Results</h3></div>
            <div className="text-center"><h4>{searchData.length === 0 ? "No Results Found" : ""}</h4></div>
            <div className='row m-0'>
                {searchData.map(anime => <div className="col-md-3 col-lg-2 col-6 mb-1" key={anime.anime}> <Link to={`../../anime/${anime.anime}`}><AnimeCard key={anime.anime} cover={anime.thumbnail} name={anime.anime} /></Link> </div>)}
            </div>
        </>
    )
}
