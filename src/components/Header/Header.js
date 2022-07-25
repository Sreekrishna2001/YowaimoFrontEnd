import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [search, setSearch] = new useState("");
    let navigate = useNavigate()
    const onSearch = () => {
        if (search.trim() !== "") {
            navigate(`/search/${search}`)
        }
    }

    return (
        <nav>
            <div className="logo-title">
                <a href="/" className="logo">
                    <img src="https://i.etsystatic.com/32102052/r/il/f4ce90/3531437237/il_340x270.3531437237_ihyg.jpg" alt="Yowai Mo" />
                    Yowai Mo
                </a>
            </div>
            <div className="anime-kdrama">
                <div className="search-bar-container">
                    <div className="searchBar">
                        <input 
                        className="searchQueryInput" 
                        type="search" 
                        name="search_anime" 
                        placeholder="Search Anime..." 
                        maxLength="100" 
                        aria-autocomplete="both" 
                        aria-haspopup="false" 
                        autoCapitalize="off" 
                        autoComplete="off" 
                        autoCorrect="off" 
                        autoFocus="" 
                        role="searchbox" 
                        spellCheck="true" 
                        title="Search Anime" 
                        aria-label="Search Anime" 
                        onKeyUp={(e) => { setSearch(e.target.value) }} 
                        // onKeyPress={(e) => {
                        //     if(e.key === 'Enter'){
                        //         onSearch()
                        //     } 
                        //      }}
                        onKeyPress = {onSearch}
                        />
                        <button id="searchQuerySubmit" type="submit" onClick={onSearch}>
                            <span className="material-icons"> search </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}