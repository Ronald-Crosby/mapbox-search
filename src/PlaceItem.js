import React, { Component } from 'react'
import mapbox from 'mapbox-gl'
import './places.css'

class PlaceItem extends Component {
  goTo() {
    const app = this.props.app
    const map = app.state.map
    const place = this.props.place

    map.flyTo({
      center: [place.longitude, place.latitude],
      zoom: 12,
    })
  }

  render() {
    // we passed in 'app' as this.props.app in PlacesPanel, the parent component of PlaceItem. Here we are saving some code by assigning it to app
    const app = this.props.app
    // 'map' is a property in the App.js state (the highest level component), we passed the 'this' of the app down to PlacesPanel and then again to PlaceItem here.
    const map = app.state.map
    // place was passed from PlacesPanel to PlaceItem separately to this.props.app
    const place = this.props.place

    if (map) {
      const popup = new mapbox.Popup({
        closeButton: false,
      })
      popup.setHTML(place.name)

      const marker = new mapbox.Marker({
        color: '#2727e6',
      })
      marker.setLngLat([place.longitude, place.latitude])
      marker.setPopup(popup)
      marker.addTo(map)
    }

    return (
      <div className="places-item" onClick={() => this.goTo()}>
        {place.name} ({place.latitude}, {place.longitude})
      </div>
    )
  }
}

export default PlaceItem
