import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import StarshipList from '../StarshipList/StarshipList'
import Starships from '../Starships/Starships' 


class App extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <Route
      exact path='/'
      render={() => 
        <StarshipList />
      }
      />
        <Route 
          exact path='/starship'
          render={( { location }) =>
            <Starships 
              location={location}
            />
          } 
        />
      </>
     );
  }
}
 
export default App;

