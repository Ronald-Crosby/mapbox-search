import React, { Component } from 'react'
import './search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isLoading: false,
    }
    // the below takes the 'this' reference in the handleChange function and makes it apply to the whole component - its an annoying querk of React
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    const accessToken = 'pk.eyJ1Ijoib2xseXJvYmluc29uIiwiYSI6ImNrNG8zZ2Q0NTEwMWMzb253bHJzdzNmMTcifQ.GIKj4HOo5DKEr-gzvLEL-g'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const places = this.props.app.state.places
        const firstResult = data.features[0]

        places.push({
          name: this.state.value,
          longitude: firstResult.center[0],
          latitude: firstResult.center[1],
        })

        this.props.app.setState({
          places: places,
        })

        this.setState({
          value: '',
        })
      })
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input className="search__input" value={this.state.value} onChange={this.handleChange} placeholder="Search for a place" />
      </form>
    )
  }
}

export default Search
