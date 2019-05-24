import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './Content.css'

import {
  about,
  Partners,
  references,
  shipping,
  Contacts,
  Seminare,
  Vystavy,
  Rady,
  skoleni
} from './Menu/Menu.js'
import { sanitace, zlazy, paznehty, staje, lizy, eko } from './Cat/Cat.js'

class Content extends Component {
  render () {
    return (
      <React.Fragment>
        <div id='content'>
          <Switch>
            <Route path='/partneri' component={Partners} />
            <Route path='/o-nas' component={about} />
            <Route path='/reference' component={references} />
            <Route path='/doprava' component={shipping} />
            <Route path='/kontakty' component={Contacts} />
            <Route path='/seminare' component={Seminare} />
            <Route path='/vystavy' component={Vystavy} />
            <Route path='/rady' component={Rady} />
            <Route path='/skoleni' component={skoleni} />

            <Route path='/sanitace' component={sanitace} />
            <Route path='/sanitace/kysele' component={about} />
            <Route path='/sanitace/alkalicke' component={about} />
            <Route path='/zlazy' component={zlazy} />
            <Route path='/zlazy/pred' component={about} />
            <Route path='/zlazy/po' component={about} />
            <Route path='/paznehty' component={paznehty} />
            <Route path='/paznehty/vany' component={about} />
            <Route path='/paznehty/lokalni' component={about} />
            <Route path='/staje' component={staje} />
            <Route path='/staje/stajova' component={about} />
            <Route path='/staje/posyp' component={about} />
            <Route path='/staje/voda' component={about} />
            <Route path='/staje/myci' component={about} />
            <Route path='/lizy' component={lizy} />
            <Route path='/lizy/solsel' component={about} />
            <Route path='/lizy/star' component={about} />
            <Route path='/lizy/minilic' component={about} />
            <Route path='/lizy/toplick' component={about} />
            <Route path='/eko' component={eko} />
            <Route path='/eko/lizy' component={about} />
            <Route path='/eko/insekticidy' component={about} />
            <Redirect from='/' to='/o-nas' />
            <Route component={about} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default Content
