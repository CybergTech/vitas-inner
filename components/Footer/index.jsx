/* eslint-disable react/prop-types */
import React from 'react'

import Links from './Links'
import Copyright from './Copyright'

import styles from './styles.module.css'

function Header () {
  return (
    <div className={styles.container}>
      <Links />
      <Copyright />
    </div>
  )
}

export default Header
