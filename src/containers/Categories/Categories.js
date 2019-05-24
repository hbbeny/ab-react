import React, { Component } from 'react'
import Category from '../../components/Category/Category.js'
import importAll from '../../functions/ImportAll/ImportAll.js'
import './Categories.css'
class Categories extends Component {
  state = {
    targets: {
      1: '/sanitace#content',
      2: '/zlazy#content',
      3: '/paznehty#content',
      4: '/staje#content',
      5: '/lizy#content',
      6: '/eko#content'
    },
    names: {
      1: 'SANITACE MLÉKOVODNÉHO POTRUBÍ',
      2: 'DEZINFEKCE A HYGIENA MLÉČNÉ ŽLÁZY',
      3: 'DEZINFEKCE A OŠETŘENÍ PAZNEHTŮ',
      4: 'STÁJOVÁ A PLOŠNÁ DEZINFEKCE',
      5: 'MINERÁLNÍ SOLNÉ LIZY',
      6: 'EKO FARMY'
    }
  }

  render () {
    const images = importAll(
      require.context('../../assets/img/categories', false, /^\.\/.*\.jpg$/)
    )

    let categories = []
    for (let i = 1; i <= Object.keys(this.state.targets).length; i++) {
      categories.push(
        <Category
          key={i}
          href={this.state.targets[i]}
          name={this.state.names[i]}
          image={images[i + '.jpg']}
        />
      )
    }

    return (
      <React.Fragment>
        <div id='categories' className='row'>
          {categories}
        </div>
      </React.Fragment>
    )
  }
}

export default Categories
