import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import './Nav.css'
const nav = () => {
  return (
    <React.Fragment>
      <div id='nav'>
        <nav className='navbar navbar-default expand noPadding'>
          <div id='navbar-col' className='navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className='nav-li'>
                <NavLink
                  className='nav-a'
                  to='/o-nas#content'
                  location={{
                    pathname:
                      document.location.pathname + document.location.hash
                  }}
                >
                  O&nbsp;nás
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink
                  className='nav-a'
                  to='/partneri#content'
                  location={{
                    pathname:
                      document.location.pathname + document.location.hash
                  }}
                >
                  Obchodní&nbsp;partneři
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink
                  className='nav-a'
                  to='/reference#content'
                  location={{
                    pathname:
                      document.location.pathname + document.location.hash
                  }}
                >
                  Reference
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink
                  className='nav-a'
                  to='/doprava#content'
                  location={{
                    pathname:
                      document.location.pathname + document.location.hash
                  }}
                >
                  Doprava/obchodní&nbsp;podmínky
                </NavLink>
              </li>
              <li className='nav-li'>
                <NavLink
                  className='nav-a'
                  to='/kontakty#content'
                  location={{
                    pathname:
                      document.location.pathname + document.location.hash
                  }}
                >
                  Kontakty
                </NavLink>
              </li>
              <li className='nav-li'>
                <a
                  className='nav-a'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='nav-eshop'
                  href='http://eshop.abplus-benes.cz/'
                >
                  Eshop
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default nav
