import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [search, setSearch] = new useState("");
    let navigate = useNavigate()
    const onSearch = () => {
        if (search.trim() !== "") {
            navigate(`/search/${search}`)
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <h3 className='text-center text-white'>Yowai mo 🤞</h3>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <span className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" required onKeyUp={(e) => { setSearch(e.target.value) }} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type='submit' onClick={onSearch}>Search</button>
                </span>
            </div>
        </nav>
    )
}