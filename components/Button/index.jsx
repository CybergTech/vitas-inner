/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Button ({
  icon,
  content,
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
  justLikeInputs,
  ...rest
}) {
  let blockExtraClasses = ` ${mini && styles.mini}`
  blockExtraClasses += ` ${justLikeInputs && styles.justLikeInputs}`

  let extraClasses = !link ? styles.notALink : ''
  extraClasses += ` ${submitButton && styles.submit}`
  extraClasses += ` ${darkestBackground && styles.darkest}`
  extraClasses += ` ${withoutBack && styles.withoutBack}`
  extraClasses += ` ${borderedButton && styles.borderedButton}`
  extraClasses += ` ${iconMarginNone && styles.iconMarginNone}`

  const contentElement = content !== undefined
    ? (
      content[1] === 'icon'
        ? <FontAwesomeIcon icon={content[0]} className={styles.icon} />
        : <img
          src={content[0]}
          alt=""
          className={styles.photo}
        />
    )
    : ''

  const mainInfo = <>
    {reverse
      ? <>
        {!!text && text}
        {!!icon && <FontAwesomeIcon icon={icon} className={`${styles.icon} ${styles.reverse}`} />}
        {contentElement}
      </>
      : <>
        {contentElement}
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
