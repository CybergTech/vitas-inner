/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CurrencyInput from 'react-currency-input'

import useFocus from '../../hooks/useFocus'

import styles from './styles.module.css'

function Input ({
  name,
  value,
  placeholder,
  icon,
  maxLength,
  zIndex800,
  prefix,
  image,
  currencyInput,
  ...rest
}) {
  const [inputRef, setInputFocus] = useFocus()

  const [passwordView, setPasswordView] = useState(false)
  const [eyeIcon, setEyeIcon] = useState('eye')

  const blockExtraClasses = ` ${zIndex800 && styles.zIndex800}`

  let extraClasses = ` ${(maxLength !== undefined && maxLength[1] === true) && styles.pdR2}`
  extraClasses += ` ${((icon !== undefined) || (prefix !== undefined && prefix[1] === 'left')) && styles.pdL}`
  extraClasses += ` ${((prefix !== undefined && prefix[1] === 'right') || (rest.type && rest.type === 'password')) && styles.pdR}`

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
      {image !== undefined &&
        <div className={styles.descriptionContent}>
          <img
            src={`/images/${image[0]}`}
            alt="Description-Picture"
            className={styles.descriptionPicture}
          />
        </div>
      }

      <div className={styles.inputContent}>
        {currencyInput === undefined
          ? <input
            type="text"
            id={name !== undefined ? name : null}
            name={name !== undefined ? name : null}
            value={value}
            placeholder={placeholder}
            className={`${styles.input} ${extraClasses}`}
            ref={inputRef}
            maxLength={maxLength !== undefined ? Number(maxLength[0]) : ''}
            {...rest}
          />
          : <CurrencyInput
            id={name !== undefined ? name : null}
            name={name !== undefined ? name : null}
            value={value}
            placeholder={placeholder}
            className={`${styles.input} ${extraClasses}`}
            ref={inputRef}
            maxLength={maxLength !== undefined ? Number(maxLength[0]) : ''}
            {...rest}
          />
        }

        {icon !== undefined &&
          <label htmlFor={name !== undefined ? name : ''} className={styles.icon}>
            <FontAwesomeIcon icon={icon} />
          </label>
        }

        {prefix !== undefined &&
          <label
            htmlFor={name !== undefined ? name : ''}
            className={`${styles.prefix} ${prefix[1] === 'right' ? styles.right : styles.left}`}
          >
            {prefix[0]}
          </label>
        }

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

        {(maxLength !== undefined && maxLength[1] === true) &&
          <div
            className={styles.maxLengthContent}
          >
            {value.length}/{maxLength}
          </div>
        }
      </div>
    </div>
  )
}

export default Input
