import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists, validEmail } from '../../services/validation'
import { cnpjMask } from '../../services/masks'

import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Message from '../../components/Message'

import styles from '../../styles/Sign.module.css'

function Signup () {
  const [key, setKey] = useState(1)
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [messages, setMessages] = useState([])

  function changeEmail (e) {
    setEmail(e)
    if (e.length > 0 && cnpj.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  function changeCnpj (e) {
    setCnpj(cnpjMask(e))
    if (cnpjMask(e).length > 0 && email.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  function handleFormSubmit (e) {
    e.preventDefault()

    if (!exists(email) && !exists(cnpj)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de email e senha!"
      />])
    } else if (!exists(email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de email!"
      />])
    } else if (!validEmail(email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha um email válido!"
      />])
    } else if (!exists(cnpj)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de senha!"
      />])
    } else {
      setMessages([...messages, <Message
        key={key}
        type="success"
        text="Todos os dados foram preenchidos!"
      />])
    }

    setKey(key + 1)
    Router.push('/dashboard')
  }

  return (
    <main className={styles.container}>
      <div className={styles.column}>
        <div className={styles.subtitles}>
          <h1 className={styles.logoContainer}>
            <Logo />
          </h1>
          <h2 className={styles.title}>
            Insira seus dados para iniciar o cadastro
          </h2>
        </div>
      </div>

      <div className={styles.column}>
        <div className={`${styles.signWrapper} ${styles.signup}`}>
          <form
            className={styles.form}
            onSubmit={e => handleFormSubmit(e)}
          >
            <Input
              name="cnpj"
              value={cnpj}
              placeholder="CNPJ"
              icon="envelope"
              onChange={e => changeCnpj(e.target.value)}
            />

            <Input
              name="email"
              value={email}
              placeholder="Email"
              icon="envelope"
              onChange={e => changeEmail(e.target.value)}
            />

            <button
              type="submit"
              className={styles.button}
              disabled={disabled}
            >
              Continuar
            </button>
          </form>

          <div className={styles.divisionOr}>
            <hr className={styles.lineThrough} />
            <h4 className={styles.text}>OU</h4>
          </div>

          <div className={styles.otherOptions}>
            <div className={styles.links}>
              <Link href="/conta/entrar">
                <a
                  className={styles.link}
                >
                  Entrar com login em vez disso <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Signup
