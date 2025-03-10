import { Component } from "react"
import {Link} from 'react-router-dom'
import './index.css'

const theatreData = [
    {
        id: 1,
        name: 'PVR CINEMAS',
    },
    {
        id: 2,
        name: 'AMRUTHA THEATRE',
    },
    {
        id: 3,
        name: 'GEMINI ATMS 4K',
    }
    ,{
        id: 4,
        name: 'MUTHYALA S 4K DLB ATMS',
    }
]

class Theatres extends Component{
    render(){
        return <div className="main-th">
            <ul>
                {
                    theatreData.map(each=>(
                        <Link key={each.id} className="link-item" to="/tview">
                        <li className="th-it">
                            <p>{each.name}</p>
                            <p>Time 12:00pm</p>
                        </li>
                        </Link>
                    ))
                }
            </ul>
            <div className="op">
                <img src="https://img.freepik.com/free-photo/collage-about-movie-time-with-kid-holding-popcorn_23-2149946327.jpg?t=st=1739166432~exp=1739170032~hmac=16113ab200add2a490302403d565d060076a8adfbe9076c02889be7622adc49b&w=740" className="plan-img" alt="plan"/>
                <h1>Grab the Oppurtunity with <br/><span className="sp">SLAVE OF TFI</span></h1>
                <p>Just 500/- only</p>
                <p>Watch the 5 movies</p>
            </div>
        </div>
    }
}
export default Theatres