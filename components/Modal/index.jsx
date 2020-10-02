/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import styles from './styles.module.css'

class Modal extends Component {
  componentDidMount () {
    document.querySelector('html').style.overflowY = 'hidden'

    window.addEventListener('click', e => {
      if (e.target.id === 'modalContainer') {
        this.props.handleHideModal()
      }
    })
  }

  componentWillUnmount () {
    document.querySelector('html').style.overflowY = 'auto'
    window.removeEventListener('click', this)
  }

  render () {
    return (
      <div className={styles.container} id="modalContainer">
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal
