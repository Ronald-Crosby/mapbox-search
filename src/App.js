import React, { Component } from 'react'
import Map from './Map'
import Toggler from './Toggler'
import Search from './Search'
import './App.css'
import PlacesPanel from './PlacesPanel'

class App extends Component {
  constructor(props) {
    // this pulls in a bunch of defaults that React needs in order to work. Just do it every time you establish state.
    super(props)
    this.state = {
      map: null,
      latitude: 53.79648,
      longitude: -1.54785,
      style: 'mapbox://styles/mapbox/dark-v10',
      places: [],
    }
  }
  render() {
    return (
      <div>
        <PlacesPanel app={this}></PlacesPanel>
        <Search app={this} />
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
      </div>
    )
  }
}

export default App
