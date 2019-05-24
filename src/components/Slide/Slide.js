import React, { Component } from 'react'

class Slide extends Component {
  render () {
    const picture = pictures => {
      return (
        <picture>
          <source media='(max-width: 390px)' srcSet={pictures[1]} />
          <source media='(max-width: 576px)' srcSet={pictures[2]} />
          <source media='(max-width: 767px)' srcSet={pictures[3]} />
          <img
            className='img-fluid'
            alt='Slide'
            src={pictures[0]}
            style={
              pictures[0].indexOf('.png') < 0
                ? { position: 'relative' }
                : { position: 'absolute', left: 0 }
            }
          />
        </picture>
      )
    }
    return (
      <React.Fragment>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={this.props.target ? this.props.target : '#'}
        >
          {this.props.images ? picture(this.props.images) : ''}
          {this.props.texts ? picture(this.props.texts) : ''}
        </a>
      </React.Fragment>
    )
  }
}

export default Slide
