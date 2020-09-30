/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists, validEmail } from '../../services/validation'

import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Input from '../../components/Input'
import Message from '../../components/Message'
import Footer from '../../components/Footer'
import Loading from '../../components/Loading'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

function Signin () {
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

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
    } else if (!exists(this.state.email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de email!"
      />])
    } else if (!validEmail(this.state.email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha um email válido!"
      />])
    } else if (!exists(this.state.password)) {
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
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Entre na plataforma - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header reduced></Header>
      </header>

      <main className={grid.main}>
        <div className={styles.signContainer}>
          <div className={styles.signinContent}>
            <DetailDots style={{ right: '83%', bottom: '-30px' }} />

            <div className={styles.signinWrapper}>
              <h2 className={styles.title}>
                Olá! Informe seu email e senha para continuar
              </h2>

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
                <div className={styles.socialMediaOptions}>
                  <button
                    type="button"
                    className={styles.googleButton}
                    onClick={() => signIn('google')}
                  >
                    <div className={styles.googleLogo}>
                      <img src="/images/google.svg" alt="google" />
                    </div>

                    <h4 className={styles.googleText}>Fazer login com o Google</h4>
                  </button>
                </div>

                {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}

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
        </div>

        <div className="messagesContainer">
          {messages}
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>

      {loading && <Loading />}
    </div>
  )
}

export default Signin
