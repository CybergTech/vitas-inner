/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Textarea ({ name, value, placeholder, icon, maxLength, ...rest }) {
  const extraClasses = ` ${maxLength !== undefined && styles.pdR2}`

  return (
    <div className={styles.textareaBlock}>
      <textarea
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${styles.textarea} ${extraClasses}`}
        maxLength={maxLength !== undefined ? Number(maxLength) : ''}
        {...rest}
      ></textarea>

      <label htmlFor={name} className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </label>

      {maxLength !== undefined &&
        <div
          className={styles.maxLengthContent}
        >
          {value.length}/{maxLength}
        </div>
      }
    </div>
  )
}

export default Textarea
