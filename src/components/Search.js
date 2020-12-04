import './search.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Search() {

    const [search, setSearch] = useState(``)

    const getSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="search">
            <input type="text" placeholder="Search Movie" value={search} onChange={getSearch} search={search} required></input>
            <Link to={`/search/${search}`}>
                <button><FontAwesomeIcon className="icon" icon={ faSearch } /></button>
            </Link>
        </div>
    )
}

export default Search
