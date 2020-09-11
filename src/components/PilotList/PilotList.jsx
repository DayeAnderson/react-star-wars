import React, { Component } from 'react'
import { getPilots } from '../../Services/sw-api'

class Pilots extends Component {
  state = { 
    pilotUrls: this.props.pilots,
    pilotList: []
  }
  async componentDidMount(){
      const promises = await getPilots(this.state.pilotUrls)
    const pilotObjects = await Promise.all(promises)
    this.setState({ pilotList: pilotObjects })
  }
  render() { 
      const { pilotList } = this.state
    return ( 
      <>
      {pilotList.length
      ?
      <>
      <p>Notable Pilots:</p>
          {pilotList.map((pilot) =>
            <h4 key={pilot.name}>{pilot.name}</h4>  
          )}
    </>
    :
    <p>This ship has no notable Pilots</p>
    }
    </>
    );
  }
}
export default Pilots;