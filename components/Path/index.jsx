/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Path ({ paths }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {paths.map((path, index) => {
          const sep = <FontAwesomeIcon icon="chevron-right" className={styles.icon} />

          return (
            <li key={path.name} className={styles.item}>
              <Link href={path.href}>
                <a>
                  {path.name}
                </a>
              </Link>

              {paths[index + 1] && sep}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Path
