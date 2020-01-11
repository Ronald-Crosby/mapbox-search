import React, { Component } from 'react'
import './places.css'
import PlaceItem from './PlaceItem'

class PlacesPanel extends Component {
  render() {
    const places = this.props.app.state.places

    let placeItems = <div className="no-results">Search to add a place</div>

    if (places.length > 0) {
      placeItems = places.map((place, index) => {
        return <PlaceItem app={this.props.app} place={place} key={index}></PlaceItem>
      })
    }

    return <div className="places-panel">{placeItems}</div>
  }
}

export default PlacesPanel
