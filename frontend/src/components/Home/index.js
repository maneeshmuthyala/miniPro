import {Component} from 'react'
import ReactPlayer from 'react-player'
import { ThreeDots } from 'react-loader-spinner';
import MovieCard from '../MovieCard'
import Header from '../Header'

import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Home extends Component{
state = {data:[], apiStatus:'INITIAL'}

    componentDidMount() {
        this.getProducts()
      }
    
      getProducts = async () => {
        const {searchInput} = this.state;
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
        const apiUrl = `http://localhost:8081/posters/`
        const options = {
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
          const fetchedData = await response.json()
          this.setState({
            data: fetchedData,
            apiStatus: apiStatusConstants.success,
          })
        } else {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
      }
    
      renderLoadingView = () => (
        <div className="products-loader-container">
          {/* <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" /> */}
          <ThreeDots type="ThreeDots" color="#2340f9" height={50} width={50} />
        </div>
      )
    
      renderFailureView = () => (
        <div className="products-error-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            alt="all-products-error"
            className="products-failure-img"
          />
          <h1 className="product-failure-heading-text">
            Oops! Something Went Wrong
          </h1>
          <p className="products-failure-description">
            We are having some trouble processing your request. Please try again.
          </p>
        </div>
      )
    
     renderProductsListView = () => {
        const {data} = this.state
        const shouldShowProductsList = data.length > 0
    
        return shouldShowProductsList ? (
          <>     
            <Header/>  
          <div className="all-products-container">
        
            <div className='in-cont'>
            <input type="search" className='inp' placeholder='Search for Movies'/>
            <button type="search" className='srch-btn'>Search</button>
            <select className='sel'>
              <option>Hanamkonda</option>
            </select>
            </div>
            <p className='para'>Only Available in Hanamkonda</p>
            <ReactPlayer url='https://youtu.be/1StdAUcreJ4' width="80%" height="300px"/>  
            <ul className="products-list">
              {data.map(product => (
                <MovieCard mData={product} key={product.id} />
              ))} 
            </ul>
          </div>
          </>

        ) : (
          <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        )
      }
    
      renderAllProducts = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductsListView()
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
          <div className="all-products-section">
            {this.renderAllProducts()}
          </div>
        )
      }
}


export default Home     