import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"

export default function Header() {
    const [search, setSearch] = new useState("");
    let navigate = useNavigate()
    const onSearch = () => {
        if (search.trim() === "") {
            alert("Type Something")
        }
        navigate(`/search/${search}`)
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <h3>SAIKOU</h3>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onKeyUp={(e) => { setSearch(e.target.value) }} />
                    <span className="btn btn-outline-success my-2 my-sm-0" onClick={onSearch}>Search</span>
                </form>
            </div>
        </nav>
    )
}