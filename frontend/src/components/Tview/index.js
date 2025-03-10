import { Component} from "react";
import './index.css'

class Tview extends Component{
    render() {
        const seats = [];
        for (let i = 1; i < 300; i++) {
            seats.push(
                <div key={i} className="seat">
                    {i}
                </div>
            );
        }
        return (
        <div>
           <div className="view-cont" >
                {seats}
            </div>
            <div className="screen">
                SCREEN
            </div>
            </div>
        );
    }
}
export default Tview