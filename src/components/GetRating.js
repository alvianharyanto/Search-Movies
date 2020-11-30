import './getRating.css'

function GetRating({ rating, banner }) {

    const rate = rating
    const total = 10
    const starPercentage = (rate / total) * 100

    // function displayRat (e) {
    //     return rate.toFixed(1).replace('.', ',');
    // }

    return (
        <div className="rating">
            <div className="rating__value">{rating}<span>/10</span></div>
            { banner ? "" :
            <div className='stars-outer font-awesome'>
                <div className="stars-inner" style={{ width: `${starPercentage}%` }}></div>
            </div>
            }
        </div>
    );
}

export default GetRating;