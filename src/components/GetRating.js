import './getRating.css'

function GetRating({ rating, banner }) {

    const total = 10
    const starPercentage = (rating / total) * 100 // get width base on rating %

    function rate () {
        if (rating !== undefined) {
            return rating.toFixed(1).replace('.', ',') // replace . to ,
        }
    }

    // console.log(rate())

    return (
        <div className="rating">
            <div className="rating__value">
                <span className="rating__value--bolder">{rate()}</span>
                <span className="rating__value--light"> /10</span>
            </div>
            { banner ? "" :
            <div className='stars-outer font-awesome'>
                <div className="stars-inner" style={{ width: `${starPercentage}%` }}></div>
            </div>
            }
        </div>
    );
}

export default GetRating;