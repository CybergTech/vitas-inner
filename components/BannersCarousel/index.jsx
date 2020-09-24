import React, { Component } from 'react'

import Item from './Item'

import styles from './styles.module.css'

const Items = [
  {
    index: 0,
    src: 'vitas-banner.jpg',
    url: '#!'
  },
  {
    index: 1,
    src: 'vitas-banner.jpg',
    url: '#!'
  },
  {
    index: 2,
    src: 'vitas-banner.jpg',
    url: '#!'
  },
  {
    index: 3,
    src: 'vitas-banner.jpg',
    url: '#!'
  },
  {
    index: 4,
    src: 'vitas-banner.jpg',
    url: '#!'
  }
]
const eachItemInterval = 6000

class BannerCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      allItems: Items,
      currentItem: Items[0],
      autoSliderInterval: null
    }
  }

  componentDidMount () {
    this.autoSlider()
    this.activeButton(0)

    this.container = document.querySelector('.carouselContainer')
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
    this.activeButton(0)
  }

  autoSlider () {
    this.autoSliderInterval = setInterval(() => {
      this.nextItem()
    }, eachItemInterval)
  }

  nextItem (permition = false) {
    const newIndex = this.state.currentItem.index + 1
    const checkedValue = Items[newIndex] ? newIndex : 0

    this.setState({
      currentItem: Items[checkedValue]
    })
    this.activeButton(checkedValue)

    if (permition) {
      clearInterval(this.autoSliderInterval)
      this.autoSlider()
    }
  }

  goToItem (index) {
    this.setState({
      currentItem: Items[index]
    })
    this.activeButton(index)

    clearInterval(this.autoSliderInterval)
    this.autoSlider()
  }

  activeButton (index) {
    document.querySelectorAll('.carouselButton').forEach((e, i) => {
      if (i === index) {
        return e.classList.add(styles.active)
      }
      return e.classList.remove(styles.active)
    })
  }

  render () {
    return (
      <div className={`${styles.container} carouselContainer`}>
        <div className={styles.itemsContainer}>
          <div className={styles.imagesContainer}>
            <div className={styles.imagesWrapper} style={{
              transform: `translateX(
                -${this.state.currentItem.index * 100}%
              )`
            }}>
              {
                this.state.allItems.map(
                  item => <Item key={item.index} banner={item} />
                )
              }
            </div>
          </div>
        </div>

        <div className={styles.menuContainer}>
          {this.state.allItems.map(infoItem => (
            <button
              type="button"
              key={infoItem.index}
              onClick={e => this.goToItem(infoItem.index, e.target)}
              className={`${styles.button} carouselButton`}
            ></button>
          ))}
        </div>
      </div>
    )
  }
}

export default BannerCarousel
