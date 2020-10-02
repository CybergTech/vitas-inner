/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists, validEmail } from '../services/validation'

import Header from '../components/Header'
import DetailDots from '../components/DetailDots'
import Cart from '../components/Cart'
import Input from '../components/Input'
import Message from '../components/Message'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

import grid from '../styles/grid/clean.module.css'
import styles from '../styles/basket.module.css'

function Address () {
  const [session, loading] = useSession()

  const [checked, setChecked] = useState(false)

  const [key, setKey] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

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
        <title>Endereço - Sacola - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header id={true} address={false}></Header>
      </header>

      <main className={grid.main}>
        <div className={styles.container}>
          <div className={styles.focusedArea}>
            <DetailDots style={{ right: '90%', bottom: '-30px' }} />

            <div className={styles.wrapper}>
              <h2 className={styles.title}>
                Ok, agora você precisa escolher como vai<br />querer receber sua compra
              </h2>

              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <h4 className={styles.subtitle}>Entrega</h4>

                <div className={styles.group}>
                  <input
                    type="radio"
                    value="1"
                    id="delivery"
                    checked={checked}
                    onChange={e => setChecked(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setChecked(!checked)}
                    className={styles.formItem}
                  >
                    <div
                      className={`${styles.formItemSelected} ${checked && styles.isSelected}`}
                    >
                      {checked &&
                        <FontAwesomeIcon
                          icon="check-circle"
                          className={styles.selectedIcon}
                        />
                      }
                    </div>

                    <div className={styles.formItemContent}>
                      <h5 className={styles.text}>
                        <span className={styles.contentTitle}>Minha Casa</span>
                        Marechal Deodoro da Fonseca, 94<br/>
                        Loja - Curitiba, Paraná - CEP 12345-874
                      </h5>
                    </div>
                  </button>
                </div>

                <div className={styles.links}>
                  <Link href="/">
                    <a className={styles.link}>
                      Adicionar endereço <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
                    </a>
                  </Link>

                  <button type="button" className={styles.button}>
                    Confirmar escolha
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Cart />
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

export default Address
