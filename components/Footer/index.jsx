/* eslint-disable react/prop-types */
import React from 'react'

import Newsletter from './Newsletter'
import Links from './Links'
import Copyright from './Copyright'

import styles from './styles.module.css'

function Header ({ newsletter = true, maps = true }) {
  return (
    <>
      {newsletter && <Newsletter />}

      {maps && <>
        <div className={styles.row}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1322410548223!2d-49.27137978528006!3d-25.433842039272466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46c0a5aa505%3A0x172b8df3521c9b3c!2sR.%20Louren%C3%A7o%20Pinto%2C%2047%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080010-160!5e0!3m2!1sen!2sbr!4v1600459856294!5m2!1sen!2sbr"
            className={styles.iframe}
          ></iframe>
        </div>
      </>}

      <div className={styles.container}>
        <Links />
        <Copyright />
      </div>
    </>
  )
}

export default Header
