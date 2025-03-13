import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Aboutus from './components/Aboutus';
import AboutMovie from './components/AboutMovie'
import Loginpage from './components/Loginpage';
import Theatres from './components/Theatres';
import Tview from './components/Tview';
import Booking from './components/Booking';
import ProtectedRoute from './components/ProtectedRoute'
import Signuppage from './components/Signuppage'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/login" component={Loginpage } />
    <Route path="/signup" component={Signuppage } />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/about-us" component={Aboutus } />
      <ProtectedRoute path="/about_movie/:id" component={AboutMovie} />
      <ProtectedRoute path="/theatres" component={Theatres } />
      <ProtectedRoute path="/tview" component={Tview } />
      <ProtectedRoute path="/booking" component={Booking } />
    </Switch>
  </Router>
  );
}

export default App;
