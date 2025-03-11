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

class Home extends Component {
    state = {data: [], apiStatus: 'INITIAL', searchInput: ''}

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const {searchInput} = this.state
        this.setState({ apiStatus: apiStatusConstants.inProgress })

        const apiUrl = `http://localhost:8081/search?q=${searchInput}`
        const options = { method: 'GET' }

        const response = await fetch(apiUrl, options)
        if (response.ok) {
            const fetchedData = await response.json()
            this.setState({
                data: fetchedData,
                apiStatus: apiStatusConstants.success,
            })
        } else {
            this.setState({ apiStatus: apiStatusConstants.failure })
        }
    }

    onChangeSearchInput = event => {
        this.setState({ searchInput: event.target.value })
    }

    onSearch = () => {
        this.getMovies()
    }

    
    renderLoadingView = () => (
        <div className="products-loader-container">
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


    handleInputClear = (event) => {
      if (event.target.value === "") {
        this.setState(
          {
            searchInput: '',
          },
          this.getMovies,
        )
      }
  };
  

    renderMoviesListView = () => {
        const {data} = this.state
        return data.length > 0 ? (
            <>     
                <Header/>  
                <div className="all-products-container">
                    <div className='in-cont'>
                        <input 
                            type="search" 
                            className='inp' 
                            placeholder='Search for Movies'
                            value={this.state.searchInput}
                            onChange={this.onChangeSearchInput}
                            onInput={this.handleInputClear} 
                        />
                        <button type="button" className='srch-btn' onClick={this.onSearch}>
                            Search
                        </button>
                        <select className='sel'>
                            <option>Hanamkonda</option>
                        </select>
                    </div>
                    <p className='para'>Only Available in Hanamkonda</p>
                    <ReactPlayer url='https://youtu.be/1StdAUcreJ4' width="80%" height="300px"/>  
                    <ul className="products-list">
                        {data.map(movie => (
                            <MovieCard mData={movie} key={movie.id} />
                        ))} 
                    </ul>
                </div>
            </>
        ) : (
            <div className="no-products-view">
                <h1 className="no-products-heading">No Movies Found</h1>
                <p className="no-products-description">
                    We could not find any movies. Try searching with another name.
                </p>
            </div>
        )
    }

    renderAllMovies = () => {
        const {apiStatus} = this.state
        switch (apiStatus) {
            case apiStatusConstants.success:
                return this.renderMoviesListView()
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
                {this.renderAllMovies()}
            </div>
        )
    }
}

export default Home
