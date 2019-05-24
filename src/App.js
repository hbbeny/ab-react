import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header/Header.js'
import Animals from './containers/Animals/Animals.js'
import Categories from './containers/Categories/Categories.js'
import Footer from './components/Footer/Footer.js'
import Content from './containers/Content/Content.js'
import Gap from './components/Gap/Gap.js'
import Nav from './components/Nav/Nav.js'
import Jumbotron from './containers/Jumbotron/Jumbotron.js'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <div className='App'>
          <div className='container noPadding'>
            <div className='row' id='wall'>
              <div className='white col-12 offset-md-1 col-md-10 noPadding'>
                <Header />
                <Nav />
                <Jumbotron />
                <Gap />
                <Categories />
                <Gap height='5px' />
                <Animals />
                <Gap height='5px' />
                <Content />
                <Gap />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App
