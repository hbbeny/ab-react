import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className='container-fluid' id='footer'>
        <div className='row'>
          <div className='col-12 offset-lg-1 col-lg-10'>
            <div className='row' style={{ marginTop: '20px' }}>
              <div className='col-12 col-lg-4'>
                <h4 className='text-center'>SÍDLO FIRMY:</h4>
                <p className='text-center'>
                  AB PLUS BENEŠ s.r.o.
                  <br /> KUCÍNY č. 20, 334 01 Přeštice
                  <br /> Email:
                  <a className='f-contact' href='mailto:info@abplus-benes.cz'>
                    {' '}
                    info@abplus-benes.cz
                  </a>
                  <br /> Mob2:
                  <a className='f-contact' href='tel:+420739239649'>
                    {' '}
                    +420 739 239 649
                  </a>
                  <br /> Mob2:
                  <a className='f-contact' href='tel:+420734589469'>
                    {' '}
                    +420 734 589 469
                  </a>
                  <br />
                </p>
              </div>
              <div className='col-12 col-lg-4'>
                <h4 className='text-center'>OTEVÍRACÍ DOBA</h4>
                <div className='tb-div'>
                  <table className='tb left'>
                    <tbody>
                      <tr>
                        <th className='tbc'>Den</th>
                        <th className='tbc'>Od</th>
                        <th className='tbc'>Do</th>
                      </tr>
                      <tr>
                        <td className='tbc'>Pondělí</td>
                        <td className='tbc'>7:00</td>
                        <td className='tbc'>14:30</td>
                      </tr>
                      <tr>
                        <td className='tbc'>Úterý</td>
                        <td className='tbc'>7:00</td>
                        <td className='tbc'>14:30</td>
                      </tr>
                      <tr>
                        <td className='tbc'>Středa</td>
                        <td className='tbc'>7:00</td>
                        <td className='tbc'>14:30</td>
                      </tr>
                      <tr>
                        <td className='tbc'>Čtvrtek</td>
                        <td className='tbc'>7:00</td>
                        <td className='tbc'>14:30</td>
                      </tr>
                      <tr>
                        <td className='tbc'>Pátek</td>
                        <td className='tbc'>7:00</td>
                        <td className='tbc'>14:30</td>
                      </tr>
                      <tr>
                        <td className='tbc'>Sobota</td>
                        <td className='tbc'>ZAVŘENO</td>
                        <td />
                      </tr>
                      <tr>
                        <td className='tbc'>Neděle</td>
                        <td className='tbc'>ZAVŘENO</td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='col-12 col-lg-4'>
                <h4 className='text-center'>FACEBOOK</h4>
                <div className='col-12 text-center'>
                  <div
                    className='fb-page'
                    data-href='https://www.facebook.com/abplusbenes/'
                    data-hide-cover='false'
                    data-show-facepile='false'
                    data-adapt-container-width='true'
                  />
                  <br />
                  <br />
                  <div
                    className='fb-share-button'
                    data-href=''
                    data-layout='button'
                    data-size='large'
                    data-mobile-iframe='true'
                  >
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.facebook.com/sharer/sharer.php?u=http://www.abplus-benes.cz/&amp;src=sdkpreparse'
                      className='fb-xfbml-parse-ignore'
                    >
                      Sdílet Stránku
                    </a>
                  </div>
                </div>
              </div>
              <div id='copy' className='col-12'>
                <br />
                <p>
                  &copy; 2017-
                  {new Date().getFullYear()} Jan Beneš All rights reserved.
                  <a className='f-contact' href='mailto:hb.beny@seznam.cz'>
                    {' '}
                    Kontakt.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
