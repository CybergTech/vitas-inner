import React, { useState } from 'react'

import styles from './styles.module.css'

function Newsletter () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleFormSubmit (e) {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <img
          src="/images/newsletter.svg"
          alt="Inscreva-se no nosso Informativo"
          className={styles.title}
        />

        <h4 className={styles.subtitle}>
          <span className={styles.subtSpan}>
            Quer ficar por dentro de todas as novidades que estão rolando na Vita’s?
          </span>
          <br />
          Cadastre agora mesmo seus dados de contato e faça parte dessa família!
        </h4>
      </div>

      <div className={styles.row}>
        <form
          className={styles.form}
          onSubmit={e => handleFormSubmit(e)}
        >
          <div className={styles.fieldGroup}>
            <input
              type="text"
              placeholder="Nome*"
              className={styles.input}
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <input
              type="text"
              placeholder="Email*"
              className={styles.input}
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <input
              type="text"
              placeholder="Telefone*"
              className={styles.input}
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              Cadastrar-me
            </button>
          </div>
        </form>
      </div>

      <div className={styles.row}>
        <h5 className={styles.obrigatory}>
          <span>*</span>Obrigatório
        </h5>
      </div>
    </div>
  )
}

export default Newsletter
