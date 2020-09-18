/* eslint-disable react/prop-types */
import React from 'react'

import Newsletter from './Newsletter'
import Links from './Links'
import Copyright from './Copyright'

import styles from './styles.module.css'

function Header () {
  return (
    <>
      <Newsletter />

      <div className={styles.row}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.826126290509!2d-49.251765185278906!3d-25.477480741008453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4d3e3996fb9%3A0xd01ada12a7282b95!2sVita&#39;s%20Materiais%20M%C3%A9dicos!5e0!3m2!1sen!2sbr!4v1600448479294!5m2!1sen!2sbr"
          className={styles.iframe}
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1392660023503!2d-49.27148758528013!3d-25.433607139263064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46c73449c4b%3A0x7f59769ad6daae0e!2sVita&#39;s%20Medical%20material!5e0!3m2!1sen!2sbr!4v1600449122670!5m2!1sen!2sbr"
          className={styles.iframe}
        ></iframe>
      </div>

      <div className={styles.container}>
        <Links />
        <Copyright />
      </div>
    </>
  )
}

export default Header
