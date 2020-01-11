import React, { Component } from 'react'
import './toggler.css'

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url,
    })
  }

  render() {
    const styles = [
      {
        name: 'Satelite',
        url: 'mapbox://styles/mapbox/satellite-v9',
      },
      {
        name: 'light',
        url: 'mapbox://styles/mapbox/light-v10',
      },
      {
        name: 'dark',
        url: 'mapbox://styles/mapbox/dark-v10',
      },
    ]

    const buttons = styles.map((style, index) => {
      let className = ''
      if (style.url === this.props.app.state.style) {
        className = 'toggler__button--selected'
      }

      return (
        <button
          className={`toggler__button ${className}`}
          onClick={() => {
            this.setLayer(style.url)
          }}
          key={index}
        >
          {style.name}
        </button>
      )
    })

    return <div className="toggler">{buttons}</div>
  }
}

export default Toggler
