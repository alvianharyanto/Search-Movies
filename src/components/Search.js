import React, {useState} from 'react'
import './search.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {

    const [search, setSearch] = useState()

    const getSearch = (e) => {
        setSearch(e.target.value)
    }

    console.log(search)

    return (
        <div className="search">
            <input type="text" placeholder="Search Movie" value={search} onChange={getSearch}></input>
            <button><FontAwesomeIcon className="icon" icon={ faSearch } /></button>
        </div>
    )
}

export default Search
