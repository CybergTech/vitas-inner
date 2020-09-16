/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useFocus from '../../../hooks/useFocus'
import LineDivision from '../../LineDivision'

import styles from './styles.module.css'

function SearchInput ({ little }) {
  const [search, setSearch] = useState('')
  const [inputRef, setInputFocus] = useFocus()

  const lineStyle = little ? { height: '25px' } : {}

  return (
    <div className={`${styles.container} ${little ? styles.little : ''}`}>
      <input
        type="text"
        className={styles.input}
        placeholder="Pesquise aqui..."
        value={search}
        ref={inputRef}
        onChange={e => setSearch(e.target.value)}
      />

      {little
        ? <div className={styles.lineIcon}>
          <LineDivision style={{ position: 'absolute', right: '8.7%', ...lineStyle }} />
          <FontAwesomeIcon icon="search" className={styles.icon} onClick={setInputFocus} />
        </div>
        : <>
          <LineDivision style={{ position: 'absolute', right: '8.7%', ...lineStyle }} />
          <FontAwesomeIcon icon="search" className={styles.icon} onClick={setInputFocus} />
        </>
      }
    </div>
  )
}

export default SearchInput
