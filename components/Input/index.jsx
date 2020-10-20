/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useFocus from '../../hooks/useFocus'

import styles from './styles.module.css'

function Input ({ name, value, placeholder, icon, ...rest }) {
  const [inputRef, setInputFocus] = useFocus()

  const [passwordView, setPasswordView] = useState(false)
  const [eyeIcon, setEyeIcon] = useState('eye')

  const extraClasses = rest.type && rest.type === 'password' && styles.pdR

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
    <div className={styles.inputBlock}>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${styles.input} ${extraClasses}`}
        ref={inputRef}
        {...rest}
      />

      <label htmlFor={name} className={styles.icon}>
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
    </div>
  )
}

export default Input
