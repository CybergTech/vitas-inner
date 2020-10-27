/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Button ({
  icon,
  text,
  link,
  submitButton,
  darkestBackground,
  mini,
  children,
  ...rest
}) {
  let extraClasses = !link ? styles.notALink : ''
  extraClasses += ` ${submitButton && styles.submit}`
  extraClasses += ` ${darkestBackground && styles.darkest}`

  const blockExtraClasses = ` ${mini && styles.mini}`

  const mainInfo = <>
    {!!icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
    {!!text && text}
  </>

  return (
    <div
      className={`${styles.buttonBlock} ${blockExtraClasses}`}
    >
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

      {!!children && children}
    </div>
  )
}

export default Button
