import React from 'react';
import './App.css';
import MoodsContainer from './containers/MoodsContainer'
import NavBar from './components/NavBar'

class App extends React.Component {
  
  render() {
    return (

    <div className="App">

      <NavBar />
      <MoodsContainer />
    
    </div>
  );
}

  }

  

export default (App);
