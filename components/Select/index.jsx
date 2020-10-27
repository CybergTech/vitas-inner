/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function Select ({ name, value, mini, children, ...rest }) {
  const extraClasses = mini && styles.mini

  const selectItem = <select
    id={name}
    name={name}
    value={value}
    className={`${styles.select} ${extraClasses}`}
    {...rest}
  >
    {children}
  </select>

  return (
    <>
      {mini
        ? <>{selectItem}</>
        : <div className={styles.selectBlock}>
          {selectItem}
        </div>
      }
    </>
  )
}

export default Select
