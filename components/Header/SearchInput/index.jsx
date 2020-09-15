import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useFocus from '../../../hooks/useFocus'
import LineDivision from '../../LineDivision'

import styles from './styles.module.css'

function Nav () {
  const [search, setSearch] = useState('')
  const [inputRef, setInputFocus] = useFocus()

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Pesquise aqui..."
        value={search}
        ref={inputRef}
        onChange={e => setSearch(e.target.value)}
      />

      <LineDivision style={{ position: 'absolute', right: '8.7%' }} />

      <FontAwesomeIcon icon="search" className={styles.icon} onClick={setInputFocus} />
    </div>
  )
}

export default Nav
