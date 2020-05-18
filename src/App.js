import React from 'react';
import './App.css';
// import { Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
import MoodsContainer from './containers/MoodsContainer'
// import About from './components/About';
import NavBar from './components/NavBar'
// import MoodForm from './components/MoodForm'
// import Mood from './components/Mood'

class App extends React.Component {
  
  render() {
    return (

    <div className="App">

      <NavBar />
      <MoodsContainer />

      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/moods" component={MoodsContainer} />

        <Route path="/moods/new" component={MoodInput} />
        <Route path="/moods/:id" component={Mood} />
        {/* <Route path='/moods/:id' render={(routerProps) => <Mood {...routerProps} moods={this.moods} />} /> */}

        {/* <Route exact path="/about" component={About} />
   */}
       
      

    
    </div>
  );
}

  }

  

export default (App);
