/* eslint-disable react/prop-types */
import React from 'react'

import StartSelling from './StartSelling'
import Links from './Links'
import Copyright from './Copyright'

import styles from './styles.module.css'

function Footer () {
  return (
    <>
      <StartSelling />

      <div className={styles.container}>
        <Links />
        <Copyright />
      </div>
    </>
  )
}

export default Footer
