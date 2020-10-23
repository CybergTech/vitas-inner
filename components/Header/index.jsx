/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'
import Path from './Path'

function Header ({ minimizedMenu, setMinimizedMenu, paths }) {
  const [checked, setChecked] = useState(false)

  function handleChangeMenuVisibility () {
    localStorage.setItem('minimizedMenu', !minimizedMenu)
    setMinimizedMenu(!minimizedMenu)
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <button
          className={styles.hideMenuButton}
          title={`${!minimizedMenu ? 'Esconder' : 'Mostrar'} o menu`}
          onClick={() => handleChangeMenuVisibility()}
        >
          <FontAwesomeIcon icon={`${!minimizedMenu ? 'outdent' : 'indent'}`} />
        </button>

        <Path paths={paths} />
      </div>

      <div className={styles.column}>
        <ul className={styles.menuList}>
          <li className={styles.menuListItem}>
            <button className={styles.profileItem}>
              Vita&apos;s Materiais Médicos
              <span>
                <img src="/images/profile.png" alt="Neutral-Profile" />
              </span>
            </button>

            <ul>
              <li>
                <Link href="/dashboard">
                  <a>
                    Minha conta
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <a>
                    Minhas estatísticas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/conta/entrar">
                  <a>
                    Sair <FontAwesomeIcon icon="sign-out-alt" className={styles.icon} />
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles.switchContainer}>
          <input
            className={`${styles.switch} ${styles.switchShadow}`}
            type="checkbox"
            checked={checked}
            readOnly
          />
          <label
            className={`${styles.switchLabel}`}
            onClick={() => setChecked(!checked)}
          ></label>
        </div>
      </div>
    </div>
  )
}

export default Header
