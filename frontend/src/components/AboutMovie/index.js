import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import { ThreeDots } from 'react-loader-spinner';
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AboutMovie extends Component {
  state = {
    productData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getMovieData()
  }

  getMovieData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `http://localhost:8081/about_movie/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData);
      this.setState({
        productData: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <ThreeDots type="ThreeDots" color="#2340f9" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Product Not Found</h1>
      <Link to="/">
        <button type="button" className="button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )
  renderProductDetailsView = () => {
    const {productData} = this.state
    const {img_url,movie_name,rating,description} = productData;
        return (
          <div className="product-details-success-view">
            <div className="product-details-container">
              <img src={img_url} alt="product" className="product-image" /> 
              <div className="product">
                <h1 className="product-name">{movie_name}</h1>
                <p className="price-details">Rs price/-</p>
                <div className="rating-and-reviews-count">
                  <div className="rating-container">
                    <p className="rating">{rating}</p>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                      alt="star"
                      className="star"
                    />
                  </div>
                  {/* <p className="reviews-count">totalReviews Reviews</p> */}
                </div>
                <p className="product-description">{description}</p>
                {/* <div className="label-value-container">
                  <p className="label">Available:</p>
                  <p className="value">availability</p>
                </div> */}
                <div className="label-value-container">
                  <p className="label">Brand:</p>
                  <p className="value">brand</p>
                </div>
                <hr className="horizontal-line" />
                <div className="quantity-container">
                  <p className="quantity">quantity</p>
                </div>
              </div>
            </div>
            <h1 className="similar-products-heading">Similar Products</h1>
            <ul className="similar-products-list">
            </ul>
          </div>
        )
      }

  renderProductDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetails()}
        </div>
      </>
    )
  }
}
export default AboutMovie