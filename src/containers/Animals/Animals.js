import React, { Component } from 'react'
import Animal from '../../components/Animal/Animal.js'
import './Animals.css'
import importAll from '../../functions/ImportAll/ImportAll.js'

class Animals extends Component {
  state = {
    targets: {
      1: 'https://eshop.abplus-benes.cz/chov-skot~c55.html',
      2: 'https://eshop.abplus-benes.cz/chov-prasa~c56.html',
      3: 'https://eshop.abplus-benes.cz/chov-ovci-a-ko~c57.html',
      4: 'https://eshop.abplus-benes.cz/chov-drubeze%20a%20holubu~c58.html',
      5: 'https://eshop.abplus-benes.cz/chov-kraliku-a-hlodavc~c59.html',
      6: 'https://eshop.abplus-benes.cz/chov-kon~c60.html',
      7: 'https://eshop.abplus-benes.cz/chov-koce~c220.html',
      8: 'https://eshop.abplus-benes.cz/CHOV%20PSŮ~c219.html',
      9: 'https://eshop.abplus-benes.cz/chov-ptactv~c221.html'
    },
    titles: {
      1: 'Eshop - CHOV SKOTU',
      2: 'Eshop - CHOV PRASAT',
      3: 'Eshop - CHOV OVCÍ A KOZ',
      4: 'Eshop - CHOV DRŮBEŽE A HOLUBŮ',
      5: 'Eshop - CHOV KRÁLÍKŮ A HLODAVCŮ',
      6: 'Eshop - CHOV KONÍ',
      7: 'Eshop - CHOV KOČEK',
      8: 'Eshop - CHOV PSŮ',
      9: 'Eshop - CHOV PTACTVA'
    }
  }

  render () {
    const images = importAll(
      require.context('../../assets/img/animals', false, /^\.\/.*\.png$/)
    )
    let animals = []
    for (let i = 1; i <= Object.keys(this.state.targets).length; i++) {
      animals.push(
        <Animal
          key={i}
          href={this.state.targets[i]}
          title={this.state.titles[i]}
          image={images[i + '.png']}
        />
      )
    }

    return (
      <React.Fragment>
        <div id='animals'>
          <div id='animals-grid'>{animals}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default Animals
