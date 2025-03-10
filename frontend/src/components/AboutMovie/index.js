import { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../Header';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import { IoMdClose } from 'react-icons/io';
import 'reactjs-popup/dist/index.css';

import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

class AboutMovie extends Component {
  state = {
    productData: {},
    apiStatus: apiStatusConstants.initial,
    trailerData: {},
    isTrailerPopupOpen: false, // Added state to manage popup visibility
  };

  componentDidMount() {
    this.getMovieData();
    this.getVidData();
  }

  getMovieData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });
    const jwtToken = Cookies.get('jwt_token');
    const apiUrl = `http://localhost:8081/about_movie/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      this.setState({
        productData: fetchedData,
        apiStatus: apiStatusConstants.success,
      });
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  getVidData = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const jwtToken = Cookies.get('jwt_token');
    const apiUrl = `http://localhost:8081/trailer/${id}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    this.setState({ trailerData: data });
  };

  // Method to open the trailer popup
  openTrailerPopup = () => {
    this.setState({ isTrailerPopupOpen: true });
  };

  // Method to close the trailer popup
  closeTrailerPopup = () => {
    this.setState({ isTrailerPopupOpen: false });
  };

  renderVideo = () => {
    const { trailerData, isTrailerPopupOpen } = this.state;
    const { url } = trailerData;

    return (
      <div className="popup-container">
        {/* Conditionally render Popup only if the trailer URL is available */}
        {url && (
          <Popup
            open={isTrailerPopupOpen}
            modal
            onClose={this.closeTrailerPopup} // Close popup when clicked outside or the close button
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={this.closeTrailerPopup}
                  data-testid="closeButton"
                >
                  <IoMdClose />
                </button>
                <div className="video-container">
                  <div className="responsive-container">
                    <ReactPlayer url={url} playing width="90" height="60vh"/>
                  </div>
                </div>
              </>
            )}
          </Popup>
        )}
      </div>
    );
  };

  renderLoadingView = () => (
    <div className="products-details-loader-container" data-testid="loader">
      <ThreeDots type="ThreeDots" color="#2340f9" height={50} width={50} />
    </div>
  );

  renderFailureView = () => (
    <div className="product-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
      />
      <h1 className="product-not-found-heading">Movie Details Not Found</h1>
      <Link to="/">
        <button type="button" className="button">
          Back to Home
        </button>
      </Link>
    </div>
  );

  renderProductDetailsView = () => {
    const { productData } = this.state;
    const {
      img_url,
      movie_name,
      language,
      rating,
      description,
      hero_img,
      hero_name,
      heroine_img,
      heroine_name,
      director_img,
      director_name,
      producer_img,
      producer_name,
    } = productData;

    return (
      <div className="product-details-success-view">
        <div className="product-details-container">
          <div className="mov">
            <img src={img_url} alt="product" className="product-image" />
            <div>
              <button
                className="btnn"
                onClick={this.openTrailerPopup} // Open the popup when clicked
              >
                Watch Trailer
              </button>
              <Link to="/theatres">
                <button className="btnn2">Book Ticket</button>
              </Link>
            </div>
          </div>
          <div className="product">
            <h1 className="product-name">{movie_name}</h1>
            <p className="price-details">{language}</p>
            <div className="rating-and-reviews-count">
              <div className="rating-container">
                <p className="rating">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
            <p className="price-details">About the Movie</p>
            <p className="product-description">{description}</p>
            <h1>Cast</h1>
            <div className="cast-cont">
              <div className="ind-cont">
                <img src={hero_img} className="hero-img" />
                <p className="par">{hero_name}</p>
              </div>
              <div className="ind-cont">
                <img src={heroine_img} className="hero-img" />
                <p className="par">{heroine_name}</p>
              </div>
            </div>
            <h1>Crew</h1>
            <div className="cast-cont">
              <div className="ind-cont">
                <img src={director_img} className="hero-img" />
                <p className="par">{director_name}</p>
              </div>
              <div className="ind-cont">
                <img src={producer_img} className="hero-img" />
                <p className="par">{producer_name}</p>
              </div>
            </div>
            <hr className="horizontal-line" />
          </div>
        </div>
      </div>
    );
  };

  renderProductDetails = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetailsView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          {this.renderProductDetails()}
        </div>
        {this.renderVideo()}
      </>
    );
  }
}

export default AboutMovie;
