import React, { Component } from 'react';
import { getDetails } from '../../Services/sw-api'
import { Link } from 'react-router-dom' 
import { getPilots } from '../../Services/sw-api'
import PilotList from '../../components/PilotList/PilotList'

class Starships extends Component {
    state = { 
        url: this.props.location.state.starship.url,
        starships: {}
     }

     async componentDidMount() {
         const starships = await getDetails(this.state.url)
         this.setState({ starships })
     }


    render() { 
        const { starships, pilots } = this.state
        return ( 
            <div>
            {starships.name ?
        <>
            <h3>Starship Details</h3>
            <h4>Name: {starships.name}</h4>
            <h4>Model: {starships.model}</h4>
            <h4>Length: {starships.length}</h4>
            <h4>Crew: {starships.crew}</h4>
            <h4>Class: {starships.starship_class}</h4>
            <PilotList pilots={starships.pilots}/>


        </>
        :
        <p>Loading starship details ...</p>
            }   
            <Link
            to={{
                pathname: '/'
            }}
            >
            <button>Go Back</button>
            
            
            </Link>
        </div>
         );
    }
}
 
export default Starships;