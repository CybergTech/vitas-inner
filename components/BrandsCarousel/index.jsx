import React from 'react'

import Item from '../BrandItem'

import styles from './styles.module.css'

const Items = [
  {
    index: 0,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 1,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 2,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 3,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 4,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 5,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 6,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  },
  {
    index: 7,
    name: 'Mercur',
    slogan: 'O mundo de um jeito bom pra todo o mundo',
    src: 'mercur.svg',
    url: '#!'
  }
]

const eachItemInterval = 4000

class BrandsCarousel extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      oneFourth: 0,
      allItems: Items,
      currentItem: Items[0],
      autoSliderInterval: null
    }
  }

  componentDidMount () {
    this.getWidthToEachCard()
    this.autoSlider()

    this.container = document.querySelector('.brandsCarouselContainer')
    this.container.addEventListener('mouseenter', () => {
      clearInterval(this.autoSliderInterval)
    })

    this.container.addEventListener('mouseleave', () => {
      clearInterval(this.autoSliderInterval)
      this.autoSlider()
    })
  }

  componentWillUnmount () {
    this.container.removeEventListener('mouseenter', this)
    this.container.removeEventListener('mouseleave', this)
    clearInterval(this.autoSliderInterval)
  }

  getWidthToEachCard () {
    const containerWidth = document.querySelector('.brandsCarouselContainer').offsetWidth
    const windowWidth = window.innerWidth
    var withMargin = 0

    if (windowWidth >= 1300) {
      // There will be 4 cards
      withMargin = containerWidth / 4
    } else if (windowWidth >= 750) {
      // There will be 3 cards
      withMargin = containerWidth / 3
    } else {
      // There will be 2 card
      withMargin = containerWidth / 2
    }

    this.setState({
      oneFourth: (withMargin - 10)
    })
  }

  autoSlider () {
    this.autoSliderInterval = setInterval(() => {
      this.nextItem()
    }, eachItemInterval)
  }

  nextItem (permition = false) {
    const newIndex = this.state.currentItem.index + 1
    const checkedValue = Items[newIndex + 3] ? newIndex : 0

    this.setState({
      currentItem: Items[checkedValue]
    })

    if (permition) {
      clearInterval(this.autoSliderInterval)
      this.autoSlider()
    }
  }

  prevItem () {
    const newIndex = this.state.currentItem.index - 1
    const checkedValue = Items[newIndex] ? newIndex : Items.length - 4

    this.setState({
      currentItem: Items[checkedValue]
    })

    clearInterval(this.autoSliderInterval)
    this.autoSlider()
  }

  render () {
    return (
      <div className={styles.container} style={{ height: `${this.state.oneFourth}px` }}>
        <div className={`${styles.itemsContainer} brandsCarouselContainer`}>
          <div
            className={styles.imagesContainer}
            style={{ width: `${this.state.oneFourth}px` }}
          >
            <div className={styles.imagesWrapper} style={{
              transform: `translateX(
                -${this.state.currentItem.index * 100}%
              )`
            }}>
              {
                this.state.allItems.map(
                  item => (
                    <Item
                      key={item.index}
                      brand={item}
                      style={{
                        minWidth: `${this.state.oneFourth}px`,
                        maxWidth: `${this.state.oneFourth}px`,
                        height: `${this.state.oneFourth}px`
                      }}
                    />
                  )
                )
              }
            </div>
          </div>
        </div>

        <div className={styles.menuContainer}>
          <input
            type="image"
            src="/images/icons/forward-square.svg"
            className={styles.button}
            title="Avançar"
            onClick={() => this.nextItem(true)}
          />
          <input
            type="image"
            src="/images/icons/backward-square.svg"
            className={styles.button}
            title="Voltar"
            onClick={() => this.prevItem()}
          />
        </div>
      </div>
    )
  }
}

export default BrandsCarousel
