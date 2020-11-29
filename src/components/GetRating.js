import './getRating.css'

function GetRating({ rating }) {

    const total = 10
    const starPercentage = (rating / total) * 100

    return (
        <div className='stars-outer'>
            <div className="stars-inner" style={{ width: `${starPercentage}%` }}></div>
        </div>
    );
}

export default GetRating;