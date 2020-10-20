import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3'

import { exists, validEmail } from '../../services/validation'

import Logo from '../../components/Logo'
import Input from '../../components/Input'
import Message from '../../components/Message'

import styles from '../../styles/Signin.module.css'

function Signin () {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const token = executeRecaptcha('login_page')

  const [key, setKey] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [messages, setMessages] = useState([])

  function changeEmail (e) {
    setEmail(e)
    if (e.length > 0 && password.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  function changePassword (e) {
    setPassword(e)
    if (e.length > 0 && email.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  function handleFormSubmit (e) {
    e.preventDefault()

    if (!exists(email) && !exists(password)) {
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
    } else if (!exists(password)) {
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
            Insira seus dados para entrar na plataforma
          </h2>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.signinWrapper}>
          <form
            className={styles.form}
            onSubmit={e => handleFormSubmit(e)}
          >
            <Input
              name="email"
              value={email}
              placeholder="Email"
              icon="envelope"
              onChange={e => changeEmail(e.target.value)}
            />

            <Input
              name="password"
              value={password}
              placeholder="Senha"
              type="password"
              icon="lock"
              onChange={e => changePassword(e.target.value)}
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
              <Link href="/conta/esqueceu-senha">
                <a
                  className={styles.link}
                >
                  Esqueci minha senha <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>

              <Link href="/conta/cadastrar">
                <a
                  className={styles.link}
                >
                  Ainda não possuo uma conta <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Recaptcha () {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LcmkMMUAAAAAPxWHrJjtxuatMbYllD9fdv6GZCx"
      language="pt-BR"
    >
      <Signin />
    </GoogleReCaptchaProvider>
  )
}

export default Recaptcha
