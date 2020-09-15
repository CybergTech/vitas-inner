/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'

import Logo from '../Logo'
import Nav from './Nav'
import Categories from './Categories'
import SearchInput from './SearchInput'

import styles from './styles.module.css'

function Header ({ reduced }) {
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
            <Link href="javascript:history.back()">
              <a><img src="/images/icons/back.svg" alt="Go back"/></a>
            </Link>

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
