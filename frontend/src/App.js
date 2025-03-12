import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Aboutus from './components/Aboutus';
import AboutMovie from './components/AboutMovie'
import Loginpage from './components/Loginpage';
import Theatres from './components/Theatres';
import Tview from './components/Tview';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/login" component={Loginpage } />
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={Aboutus } />
      <Route path="/about_movie/:id" component={AboutMovie} />
      <Route path="/theatres" component={Theatres } />
      <Route path="/tview" component={Tview } />
      <Route path="/booking" component={Booking } />
    </Switch>
  </Router>
  );
}

export default App;
