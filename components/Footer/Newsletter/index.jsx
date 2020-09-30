import React, { useState } from 'react'

import Input from '../../Input'

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
            <Input
              name="name"
              value={name}
              placeholder="Nome*"
              icon="user-alt"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Input
              name="email"
              value={email}
              placeholder="Email*"
              icon="envelope"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.fieldGroup}>
            <Input
              name="phone"
              value={phone}
              placeholder="Telefone*"
              icon="phone-alt"
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
