/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import Logo from '../Logo'
import Nav from './Nav'
import Categories from './Categories'
import SearchInput from './SearchInput'

import styles from './styles.module.css'

class Header extends Component {
  componentDidMount () {
    window.addEventListener('scroll', () => {
      const element = document.querySelector('.navContainer')

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const isSticky = (scrollY + 1) >= windowHeight

      if (!this.props.reduced) {
        if (isSticky) {
          element.classList.add('isSticky')
        } else {
          element.classList.remove('isSticky')
        }
      }
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this)
  }

  handlerGoBack () {
    document.location.href = 'javascript:history.back()'
  }

  render () {
    return (
      <div className={`${styles.container} navContainer`}>
        {!this.props.reduced
          ? <>
            <div className={styles.row}>
              <div className={`${styles.logo} headerLogo`}>
                <Logo />
              </div>

              <Nav />
            </div>

            <div className={`${styles.row} bigCategSearch`}>
              <Categories />
              <SearchInput />
            </div>
          </>
          : <>
            <div className={`${styles.row} ${styles.reduced}`}>
              <a onClick={this.handlerGoBack}>
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
}

export default Header
