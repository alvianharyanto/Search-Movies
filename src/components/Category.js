import './category.css'
import Rows from './Rows'
import requests from '../requests'
import React, {useState} from 'react'
import getCategory from '../getCategory'

function Category() {

    const [genres, setGenres] = useState(28)

    const handleClick = (e) => {
        setGenres(e.target.value)
    }

    return (
        <div className="category">
            <h3>Genre Movies</h3>
            <div className="genre">
                {getCategory.map((genre) => (
                    <button key={genre.id}
                            className={`genre__button ${genre.id === genres ? "active": ""}`} // toggle class active if genre.id = genre
                            value={genre.id} onClick={handleClick} >
                            {genre.name}
                    </button>
                ))}
            </div>
            <Rows title="" fetchUrl={`${requests.category}${genres}`} />
        </div>
    )
}

export default Category
