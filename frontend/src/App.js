import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AboutMovie from './components/AboutMovie'
import Loginpage from './components/Loginpage';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Loginpage } />
      <Route path="/about_movie/:id" component={AboutMovie} />
    </Switch>
  </Router>
  );
}

export default App;
