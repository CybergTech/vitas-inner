/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import Logo from '../Logo'
import ProgressTracker from './ProgressTracker'

import styles from './styles.module.css'

class Header extends Component {
  render () {
    const id = this.props.id !== undefined ? this.props.id : ''
    const address = this.props.address !== undefined ? this.props.address : ''
    const payment = this.props.payment !== undefined ? this.props.payment : ''
    const checkout = this.props.checkout !== undefined ? this.props.checkout : ''

    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <ProgressTracker
            id={id}
            address={address}
            payment={payment}
            checkout={checkout}
          />

          <div className={styles.logo}>
            <Logo />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
