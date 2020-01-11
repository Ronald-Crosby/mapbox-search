import React, { Component } from 'react'
import mapbox from 'mapbox-gl'
import './map.css'

class Map extends Component {
  componentDidMount() {
    const app = this.props.app

    mapbox.accessToken = 'pk.eyJ1Ijoib2xseXJvYmluc29uIiwiYSI6ImNrNG8zZ2Q0NTEwMWMzb253bHJzdzNmMTcifQ.GIKj4HOo5DKEr-gzvLEL-g'
    var map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 11,
      pitch: 30,
    })
    var navigationControl = new mapbox.NavigationControl()
    map.addControl(navigationControl)

    app.setState({
      map: map,
    })
  }
  render() {
    const app = this.props.app
    const map = app.state.map

    if (map) {
      map.setStyle(app.state.style)
    }

    return <div id="map"></div>
  }
}

export default Map
