/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Button ({ icon, text, link, submitButton, darkestBackground, ...rest }) {
  let extraClasses = !link ? styles.notALink : ''
  extraClasses += ` ${submitButton && styles.submit}`
  extraClasses += ` ${darkestBackground && styles.darkest}`

  const mainInfo = <>
    {icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    {text && text}
  </>

  return (
    <button
      className={`${styles.button} ${extraClasses}`}
      {...rest}
    >
      {link
        ? <Link href={link}>
          <a>
            {mainInfo}
          </a>
        </Link>
        : mainInfo
      }
    </button>
  )
}

export default Button
