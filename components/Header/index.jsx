/* eslint-disable react/prop-types */
import React from 'react'

import Logo from '../Logo'
import Nav from './Nav'
import Categories from './Categories'
import SearchInput from './SearchInput'

import styles from './styles.module.css'

function Header ({ reduced }) {
  function handlerGoBack () {
    document.location.href = 'javascript:history.back()'
  }

  return (
    <div className={styles.container}>
      {!reduced
        ? <>
          <div className={styles.row}>
            <div className={styles.logo}>
              <Logo />
            </div>

            <Nav />
          </div>

          <div className={styles.row}>
            <Categories />
            <SearchInput />
          </div>
        </>
        : <>
          <div className={`${styles.row} ${styles.reduced}`}>
            <a onClick={handlerGoBack}>
              <img className={styles.goBackLink} src="/images/icons/back.svg" alt="Go back"/>
            </a>

            <div className={styles.logo}>
              <Logo />
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Header
