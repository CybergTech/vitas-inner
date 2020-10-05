import React from 'react'

import Item from '../CreditCardItem'

import styles from './styles.module.css'

const Items = [
  {
    index: 0,
    number: 'XXXX 4086',
    flag: 'visa.png'
  },
  {
    index: 1,
    number: 'XXXX 2037',
    flag: 'mastercard.png'
  },
  {
    index: 2,
    number: 'XXXX 4086',
    flag: 'visa.png'
  },
  {
    index: 3,
    number: 'XXXX 2037',
    flag: 'mastercard.png'
  }
]

class CreditCards extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cardWidth: 0,
      cardHeight: 0,
      allItems: Items,
      currentItem: Items[0]
    }
  }

  componentDidMount () {
    this.getWidthToEachCard()
  }

  getWidthToEachCard () {
    const containerWidth = document.querySelector('.creditCardsContainer').offsetWidth
    const windowWidth = window.innerWidth
    var withMargin = 0

    if (windowWidth >= 1300) {
      // There will be 4 cards
      withMargin = containerWidth / 2
    } else if (windowWidth >= 750) {
      // There will be 3 cards
      withMargin = containerWidth / 2
    } else {
      // There will be 2 card
      withMargin = containerWidth / 2
    }

    this.setState({
      cardWidth: (withMargin - 10),
      cardHeight: withMargin / 2.5
    })
  }

  nextItem (e) {
    e.preventDefault()

    const newIndex = this.state.currentItem.index + 1
    const checkedValue = Items[newIndex + 1] ? newIndex : 0

    this.setState({
      currentItem: Items[checkedValue]
    })
  }

  prevItem (e) {
    e.preventDefault()

    const newIndex = this.state.currentItem.index - 1
    const checkedValue = Items[newIndex] ? newIndex : Items.length - 2

    this.setState({
      currentItem: Items[checkedValue]
    })
  }

  render () {
    return (
      <div className={styles.container} style={{ height: `${this.state.cardHeight}px` }}>
        <div className={`${styles.itemsContainer} creditCardsContainer`}>
          <div
            className={styles.imagesContainer}
            style={{ width: `${this.state.cardWidth}px` }}
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
                      card={item}
                      style={{
                        minWidth: `${this.state.cardWidth}px`,
                        maxWidth: `${this.state.cardWidth}px`,
                        height: `${this.state.cardHeight}px`
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
            onClick={e => this.nextItem(e)}
          />
          <input
            type="image"
            src="/images/icons/backward-square.svg"
            className={styles.button}
            title="Voltar"
            onClick={e => this.prevItem(e)}
          />
        </div>
      </div>
    )
  }
}

export default CreditCards
