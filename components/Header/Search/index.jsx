/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useFocus from '../../../hooks/useFocus'
import LineDivision from '../../LineDivision'
import Modal from './Modal'

import styles from './styles.module.css'

function SearchInput ({ little, biggerModal }) {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [showClearSearchIcon, setShowClearSearchIcon] = useState(false)
  const [inputRef, setInputFocus] = useFocus()

  const searchIcon = <FontAwesomeIcon icon="search" className={styles.icon} onClick={setInputFocus} />
  const loadingIcon = <FontAwesomeIcon icon="spinner" className={styles.icon} pulse />

  const [switchIcon, setSwitchIcon] = useState(searchIcon)

  const lineStyle = little ? { height: '25px' } : {}

  function handleSearch (e) {
    setSearch(e)

    if (e.length > 0) {
      setSwitchIcon(loadingIcon)
      setShowClearSearchIcon(true)
      setShowModal(true)
    } else {
      handleClearSearch()
    }
  }

  function handleClearSearch () {
    setSwitchIcon(searchIcon)
    setShowClearSearchIcon(false)
    setShowModal(false)
    setSearch('')
  }

  return (
    <>
      <div
        className={`${styles.searchBackground} ${showClearSearchIcon ? styles.show : styles.hide}`}
        onClick={() => handleClearSearch()}
      ></div>
      <div className={`${styles.container} ${little ? styles.little : ''}`}>
        <input
          type="text"
          className={styles.input}
          placeholder="Pesquise aqui..."
          value={search}
          ref={inputRef}
          onChange={e => handleSearch(e.target.value)}
        />

        <FontAwesomeIcon
          icon="times"
          className={`
            ${styles.icon}
            ${styles.clearIcon}
            ${little ? styles.littleClearIcon : ''}
            ${showClearSearchIcon ? styles.show : styles.hide}
          `}
          onClick={handleClearSearch}
        />

        {little
          ? <div className={styles.lineIcon}>
            <LineDivision style={{ position: 'absolute', right: '8.7%', ...lineStyle }} />
            {switchIcon}
          </div>
          : <>
            <LineDivision style={{ position: 'absolute', right: '8.7%', ...lineStyle }} />
            {switchIcon}
          </>
        }

        <Modal showModal={showModal} bigger={!!biggerModal} />
      </div>
    </>
  )
}

export default SearchInput
