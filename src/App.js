import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MoodsContainer from './containers/MoodsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
// import Moods from './components/Moods'
import Mood from './components/Mood'
import MoodForm from './components/MoodForm'

class App extends React.Component {
  
  render() {
    return (

    <div className="App">
    <Router>
      
      <NavBar />
      <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path='/moods' component={MoodsContainer} />
                <Route exact path='/moods/new' component={MoodForm} />
                <Route exact path='/moods/:moodId' component={Mood} />
                </Switch>

                </Router>
    </div>
    
  );
}

  }

  

export default (App);
