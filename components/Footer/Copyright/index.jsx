import React from 'react'

import Logo from '../../Logo'

import styles from './styles.module.css'

function Copyright () {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  )
}

export default Copyright
