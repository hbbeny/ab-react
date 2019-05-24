import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide from '../../components/Slide/Slide.js'
import importAll from '../../functions/ImportAll/ImportAll.js'
class MyCarousel extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleSelect = this.handleSelect.bind(this)

    this.state = {
      index: 0,
      direction: null
    }
  }
  handleSelect (selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    })
  }
  render () {
    const images = importAll(
      require.context('../../assets/img/jumbotron', false, /^\.\/.*\.jpg$/)
    )
    const texts = importAll(
      require.context('../../assets/img/jumbotron', false, /^\.\/.*\.png$/)
    )
    const { index, direction } = this.state

    return (
      <React.Fragment>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          indicators={false}
        >
          <Carousel.Item>
            <Slide
              images={[images['slide-tmp.jpg']]}
              target={
                'http://www.abplus-benes.cz/side-menu/seminare.php#inner-content'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide0.jpg'],
                images['slide0-390.jpg'],
                images['slide0-576.jpg'],
                images['slide0-767.jpg']
              ]}
              target={'https://eshop.abplus-benes.cz/'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide1.jpg'],
                images['slide1-390.jpg'],
                images['slide1-576.jpg'],
                images['slide1-767.jpg']
              ]}
              texts={[
                texts['slide1.png'],
                texts['slide1-390.png'],
                texts['slide1-576.png'],
                texts['slide1-767.png']
              ]}
              target={
                'https://eshop.abplus-benes.cz/dojici-technika-a-potreby-pro-dojeni~c7.html'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide2.jpg'],
                images['slide2-390.jpg'],
                images['slide2-576.jpg'],
                images['slide2-767.jpg']
              ]}
              texts={[
                texts['slide2.png'],
                texts['slide2-390.png'],
                texts['slide2-576.png'],
                texts['slide2-767.png']
              ]}
              target={'https://eshop.abplus-benes.cz/chov-kon~c60.html'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide3.jpg'],
                images['slide3-390.jpg'],
                images['slide3-576.jpg'],
                images['slide3-767.jpg']
              ]}
              texts={[
                texts['slide3.png'],
                texts['slide3-390.png'],
                texts['slide3-576.png'],
                texts['slide3-767.png']
              ]}
              target={
                'https://eshop.abplus-benes.cz/elektricke-ohradniky~c12.html'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide4.jpg'],
                images['slide4-390.jpg'],
                images['slide4-576.jpg'],
                images['slide4-767.jpg']
              ]}
              texts={[
                texts['slide4.png'],
                texts['slide4-390.png'],
                texts['slide4-576.png'],
                texts['slide4-767.png']
              ]}
              target={'https://eshop.abplus-benes.cz/chov-skot~c55.html'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide5.jpg'],
                images['slide5-390.jpg'],
                images['slide5-576.jpg'],
                images['slide5-767.jpg']
              ]}
              texts={[
                texts['slide5.png'],
                texts['slide5-390.png'],
                texts['slide5-576.png'],
                texts['slide5-767.png']
              ]}
              target={
                'https://eshop.abplus-benes.cz/chov-kraliku-a-hlodavc~c59.html'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide6.jpg'],
                images['slide6-390.jpg'],
                images['slide6-576.jpg'],
                images['slide6-767.jpg']
              ]}
              texts={[
                texts['slide6.png'],
                texts['slide6-390.png'],
                texts['slide6-576.png'],
                texts['slide6-767.png']
              ]}
              target={'https://eshop.abplus-benes.cz/chov-koce~c220.html'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide7.jpg'],
                images['slide7-390.jpg'],
                images['slide7-576.jpg'],
                images['slide7-767.jpg']
              ]}
              texts={[
                texts['slide7.png'],
                texts['slide7-390.png'],
                texts['slide7-576.png'],
                texts['slide7-767.png']
              ]}
              target={'https://eshop.abplus-benes.cz/chov-ovci-a-ko~c57.html'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide8.jpg'],
                images['slide8-390.jpg'],
                images['slide8-576.jpg'],
                images['slide8-767.jpg']
              ]}
              texts={[
                texts['slide8.png'],
                texts['slide8-390.png'],
                texts['slide8-576.png'],
                texts['slide8-767.png']
              ]}
              target={
                'http://www.abplus-benes.cz/side-menu/seminare.php#inner-content'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Slide
              images={[
                images['slide9.jpg'],
                images['slide9-390.jpg'],
                images['slide9-576.jpg'],
                images['slide9-767.jpg']
              ]}
              texts={[
                texts['slide9.png'],
                texts['slide9-390.png'],
                texts['slide9-576.png'],
                texts['slide9-767.png']
              ]}
              target={'https://eshop.abplus-benes.cz/pece-o-telat~c103.html'}
            />
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    )
  }
}

export default MyCarousel
