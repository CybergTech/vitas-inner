/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Modal from './Modal'

import styles from './styles.module.css'

function Nav ({ little }) {
  const [showModal, setShowModal] = useState(false)

  function handleShowModal (show = true) {
    setShowModal(show)
    document.querySelector('html').style.overflowY = show ? 'hidden' : 'auto'
  }

  return (
    <>
      <div
        className={`${styles.categoriesBackground} ${showModal ? styles.show : styles.hide}`}
        onClick={() => handleShowModal(false)}
      ></div>

      <div
        className={`${styles.container} ${little ? styles.little : ''} ${showModal && styles.zIndex}`}
      >
        <button
          type="button"
          className={styles.button}
          onClick={() => handleShowModal(!showModal)}
        >
          <span className={styles.btnText}>CATEGORIAS</span> <FontAwesomeIcon icon="chevron-down" size="xs" />
        </button>

        {/* <Modal showModal={showModal} bigger={!!biggerModal} /> */}
        <Modal showModal={showModal} />
      </div>
    </>
  )
}

export default Nav
