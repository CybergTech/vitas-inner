/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

class Item extends React.Component {
  render () {
    return (
      <Link href={this.props.data.url}>
        <a className={styles.item} title="Clique para saber mais">
          <img
            src={`/images/banners/${this.props.data.src}`}
            alt={`Banner ${this.props.data.src}`}
            className={styles.item}
          />
        </a>
      </Link>
    )
  }
}

export default Item
