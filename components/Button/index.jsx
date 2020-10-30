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
  reverse,
  iconMarginNone,
  children,
  withoutBack,
  borderedButton,
  ...rest
}) {
  const blockExtraClasses = ` ${mini && styles.mini}`

  let extraClasses = !link ? styles.notALink : ''
  extraClasses += ` ${submitButton && styles.submit}`
  extraClasses += ` ${darkestBackground && styles.darkest}`
  extraClasses += ` ${withoutBack && styles.withoutBack}`
  extraClasses += ` ${borderedButton && styles.borderedButton}`
  extraClasses += ` ${iconMarginNone && styles.iconMarginNone}`

  const mainInfo = <>
    {reverse
      ? <>
        {!!text && text}
        {!!icon && <FontAwesomeIcon icon={icon} className={`${styles.icon} ${styles.reverse}`} />}
      </>
      : <>
        {!!icon && <FontAwesomeIcon icon={icon} className={styles.icon} />}
        {!!text && text}
      </>
    }
  </>

  return (
    <div
      className={`${styles.buttonBlock} ${blockExtraClasses}`}
    >
      <button
        className={`${styles.button} ${extraClasses}`}
        type="button"
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
