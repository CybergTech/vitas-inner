/* eslint-disable react/prop-types */
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../Logo'

import styles from './styles.module.css'

function AsideBar ({ activeLink, minimizedMenu }) {
  useEffect(() => {
    const element = document.querySelector(`[${activeLink}]`)
    if (element) {
      element.classList.add(styles.active)
    }

    document.querySelectorAll(`.${styles.listItem} > div`).forEach(e => {
      e.onmouseenter = () => {
        if (e.childNodes[1]) {
          e.childNodes[1].style.display = 'inline'
          e.querySelector(`.${styles.chevron}`).style.transform = 'rotate(90deg)'
        }
      }
      e.onmouseleave = () => {
        if (e.childNodes[1]) {
          e.childNodes[1].style.display = 'none'
          e.querySelector(`.${styles.chevron}`).style.transform = 'rotate(0deg)'
        }
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo minimizedLogo={minimizedMenu} />
      </div>

      <nav className={`${styles.nav} ${minimizedMenu && styles.minimizedNav}`}>
        <h3 className={styles.subtitle}>Menu</h3>

        <ul className={styles.list}>
          <li
            className={styles.listItem}
            dashboard="true"
          >
            <div>
              <Link href="/dashboard">
                <a>
                  <span>
                    <FontAwesomeIcon icon="th" className={styles.icon} />
                    <span>Dashboard</span>
                  </span>
                  <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
                </a>
              </Link>
            </div>
          </li>
          <li
            className={styles.listItem}
            requests="true"
          >
            <div>
              <Link href="/dashboard">
                <a>
                  <span>
                    <FontAwesomeIcon icon="layer-group" className={styles.icon} />
                    <span>Pedidos</span>
                  </span>
                  <FontAwesomeIcon icon="chevron-right" className={`${styles.icon} ${styles.chevron}`} />
                </a>
              </Link>
            </div>
          </li>
          <li
            className={styles.listItem}
            products="true"
          >
            <div>
              <Link href="/dashboard">
                <a>
                  <span>
                    <FontAwesomeIcon icon="box" className={styles.icon} />
                    <span>Produtos</span>
                  </span>
                  <FontAwesomeIcon icon="chevron-right" className={`${styles.icon} ${styles.chevron}`} />
                </a>
              </Link>

              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href="/dashboard">
                    <a>
                      <span>
                        <FontAwesomeIcon icon="box" className={styles.icon} />
                        <span>Meus produtos</span>
                      </span>
                      <FontAwesomeIcon icon="chevron-right" className={`${styles.icon} ${styles.chevron}`} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AsideBar
