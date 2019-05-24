import React, { Component } from 'react'

class Image extends Component {
  render () {
    return (
      <React.Fragment>
        <a
          className={this.props.classesLink}
          target='_blank'
          rel='noopener noreferrer'
          href={this.props.target}
        >
          <img
            className={this.props.classesImage}
            src={this.props.image}
            alt={this.props.alt}
          />
        </a>
      </React.Fragment>
    )
  }
}

export default Image
