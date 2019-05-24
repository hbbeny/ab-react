import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import './Category.css'
class Category extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='col-4 col-md-2 category'>
          <NavLink
            to={this.props.href}
            location={{
              pathname: document.location.pathname + document.location.hash
            }}
            className='category-link'
          >
            <img
              src={this.props.image}
              alt={this.props.name}
              className='img-fluid category-img'
            />
            <p className='category-name'>{this.props.name}</p>
          </NavLink>
        </div>
      </React.Fragment>
    )
  }
}
export default Category
