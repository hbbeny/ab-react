import React, { Component } from 'react'
import MyCarousel from '../MyCarousel/MyCarousel.js'
import JumbotronNav from '../../components/JumbotronNav/JumbotronNav.js'
import './Jumbotron.css'
class Jumbotron extends Component {
  state = {
    nav: {
      targets: {
        1: '/seminare#content',
        2: '/vystavy#content',
        3: '/rady#content',
        4: '/skoleni#content'
      },
      names: {
        1: 'SEMINÁŘE',
        2: 'VÝSTAVY',
        3: 'SANITAČNÍ ŘÁDY',
        4: 'ŠKOLENÍ'
      }
    }
  }

  render () {
    let jumbotronNav = []
    for (let i = 1; i <= Object.keys(this.state.nav.targets).length; i++) {
      jumbotronNav.push(
        <JumbotronNav
          key={i}
          href={this.state.nav.targets[i]}
          name={this.state.nav.names[i]}
        />
      )
    }

    return (
      <React.Fragment>
        <div className='row' id='jumbotron'>
          <div className='col-12 col-sm-10 noPadding'>
            <MyCarousel />
          </div>
          <div className='col-12 col-sm-2 noPadding' id='jumbotron-nav'>
            {jumbotronNav}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Jumbotron
