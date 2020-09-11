import React, { Component } from 'react'
import { getStarshipList } from '../../Services/sw-api'
import { Link } from 'react-router-dom'

class StarshipList extends Component {
    state = { 
        starshipList: []
     }

async componentDidMount() {
    const starshipList = await getStarshipList()
    this.setState({ starshipList: starshipList.results })
}

    

    render() { 
        return ( 
            <>
                <h3>Starship List</h3>
                {this.state.starshipList.map((starship) =>
                <div>

                    <Link
                    to={{
                        pathname: '/starship',
                        state: { starship }
                    }}
                    key={starship.name}
                    >
                    {starship.name}
                  </Link><br></br>
                    </div>
                )}
            </>
         );
    }
}
 
export default StarshipList;
