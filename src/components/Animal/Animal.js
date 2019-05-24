import React, { Component } from 'react'
import './Animal.css'

class Animal extends Component {
  render () {
    return (
      <React.Fragment>
        <a
          href={this.props.href}
          target='_blank'
          rel='noopener noreferrer'
          className='animal-link'
          title={this.props.title}
        >
          <img src={this.props.image} alt='Zvíře' className='img-fluid' />
        </a>
      </React.Fragment>
    )
  }
}

export default Animal
