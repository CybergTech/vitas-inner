/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

function Signin () {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleFormSubmit (e) {
    e.preventDefault()
    console.log('Submit')
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
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className={styles.input}
                  placeholder="Senha"
                  name="password"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                />

                <button
                  type="submit"
                  className={styles.button}
                >
                  Continuar
                </button>
              </form>

              <div className={styles.divisionOr}>
                <hr className={styles.lineThrough} />
                <h4 className={styles.text}>OU</h4>
              </div>

              <div className={styles.otherOptions}>
                <div className={styles.socialMediaOptions}></div>
                <div className={styles.links}>
                  <Link href="/account/forgot">
                    <a
                      className={styles.link}
                    >
                      Esqueci minha senha <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                    </a>
                  </Link>

                  <Link href="/account/signup">
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
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>
    </div>
  )
}

export default Signin
