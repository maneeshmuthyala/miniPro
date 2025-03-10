import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const MovieCard = props => {
  const {mData} = props
  const {id,img_url,movie_name,rating,movie_type} = mData

  return (
    <Link to = {`about_movie/${id}`} className="nav-link">    
    <li className="product-item">
        <img src={img_url} alt="product" className="thumbnail" />
        <h1 className="title">{movie_name}</h1>
        <p className="brand">{movie_type}</p>
        <div className="product-details">
          <p className="price">Book Now</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
    </li>
    </Link>

  )
}
export default MovieCard