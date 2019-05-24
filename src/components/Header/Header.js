import React from 'react'
import './Header.css'
import importAll from '../../functions/ImportAll/ImportAll.js'

const header = () => {
  const images = importAll(
    require.context('../../assets/img/header', false, /^\.\/.*\.png$/)
  )

  return (
    <React.Fragment>
      <div id='header'>
        <div className='' id='inner-header'>
          <a href='/'>
            <picture>
              <source
                media='(max-width: 390px)'
                srcSet={images['header-background-390.png']}
              />
              <source
                media='(max-width: 767px)'
                srcSet={images['header-background-767.png']}
              />
              <img
                className='img-fluid'
                src={images['header-background.png']}
                alt='header'
              />
            </picture>
          </a>
          <div id='header-contacts'>
            <a id='header-contact-link' href='tel:+420739239649'>
              <img width='15' src={images['phone-icon.png']} alt='phone-icon' />
              +420 739 239 649
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default header
