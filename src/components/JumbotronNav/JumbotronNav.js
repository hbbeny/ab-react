import React, { Component } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import './JumbotronNav.css'
class JumbotronNav extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='col-12 jumbotron-link-div'>
          <NavLink
            className='col-12 jumbotron-link'
            to={this.props.href}
            location={{
              pathname: document.location.pathname + document.location.hash
            }}
          >
            {this.props.name}
          </NavLink>
        </div>
      </React.Fragment>
    )
  }
}

export default JumbotronNav
