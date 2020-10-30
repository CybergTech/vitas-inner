/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useFocus from '../../hooks/useFocus'

import styles from './styles.module.css'

function Input ({ name, value, placeholder, icon, maxLength, zIndex800, ...rest }) {
  const [inputRef, setInputFocus] = useFocus()

  const [passwordView, setPasswordView] = useState(false)
  const [eyeIcon, setEyeIcon] = useState('eye')

  const blockExtraClasses = ` ${zIndex800 && styles.zIndex800}`

  let extraClasses = rest.type && rest.type === 'password' && styles.pdR
  extraClasses += ` ${maxLength !== undefined && styles.pdR2}`

  useEffect(() => {
    if (rest.type && rest.type === 'password') {
      if (!passwordView) {
        document.querySelector(`#${name}`)
          .setAttribute('type', 'password')
        setEyeIcon('eye')
      } else {
        document.querySelector(`#${name}`)
          .setAttribute('type', 'text')
        setEyeIcon('eye-slash')
      }
    }
  }, [passwordView])

  return (
    <div
      className={`${styles.inputBlock} ${blockExtraClasses}`}
    >
      <input
        type="text"
        id={name !== undefined ? name : null}
        name={name !== undefined ? name : null}
        value={value}
        placeholder={placeholder}
        className={`${styles.input} ${extraClasses}`}
        ref={inputRef}
        maxLength={maxLength !== undefined ? Number(maxLength) : ''}
        {...rest}
      />

      <label htmlFor={name !== undefined ? name : ''} className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </label>

      {rest.type && rest.type === 'password'
        ? <div
          className={styles.eyeContent}
          onClick={() => {
            setPasswordView(!passwordView)
            setInputFocus()
          }}
        >
          <FontAwesomeIcon
            icon={eyeIcon}
            className={`${styles.eyeIcon} ${eyeIcon === 'eye-slash' && styles.opacity}`}
          />
        </div>
        : ''
      }

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

export default Input
