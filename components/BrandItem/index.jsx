/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

import Message from '../Message'

import styles from './styles.module.css'

function BrandItem ({ brand, style }) {
  const [message, setMessage] = useState([])

  // useEffect(() => {
  //   ReactDOM.render(message, document.getElementsByClassName('messagesContainer')[0])
  // }, [message])

  function favorite () {
    setMessage([...message, <Message
      key="1"
      type="success"
      text="Marca favoritada com sucesso!"
    />])
  }

  return (
    <div
      className={styles.content}
      title={`${brand.name} | ${brand.slogan}`}
      style={style}
    >
      <div className={styles.heartIcon}>
        <input
          type="image"
          src="/images/icons/empty-heart.svg"
          title="Adicionar à Lista de Desejos"
          onClick={e => favorite(e)}
        />
      </div>

      <img
        className={styles.brandLogo}
        src={`/images/brands/${brand.src}`}
        alt="Mercur"
      />
    </div>
  )
}

export default BrandItem
