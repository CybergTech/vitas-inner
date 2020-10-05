/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { useSession } from 'next-auth/client'

import Header from '../components/Header'
import DetailDots from '../components/DetailDots'
import CreditCards from '../components/CreditCards'
import Cart from '../components/Cart'
import PaymentMethods from '../components/PaymentMethods'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

import grid from '../styles/grid/clean.module.css'
import styles from '../styles/basket.module.css'

function Payment () {
  const [session, loading] = useSession()

  const [submiting, setSubmiting] = useState(false)

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

  function handleFormSubmit (e) {
    e.preventDefault()
    setSubmiting(true)
    Router.push('/checkout')
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Pagamento - Sacola - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header id={true} address={true} payment={false}></Header>
      </header>

      <main className={grid.main}>
        <div className={styles.container}>
          <div className={styles.focusedArea}>
            <DetailDots style={{ right: '90%', bottom: '-30px' }} />

            <div className={styles.wrapper}>
              <h2 className={styles.title}>
                Já está quase no fim! Agora, você precisa<br/>escolher uma forma de pagamento
              </h2>

              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <h4 className={styles.subtitle}>Cartões Salvos</h4>

                <CreditCards />

                <h4 className={styles.subtitle}>Outras formas de pagamento</h4>

                <PaymentMethods />

                <div className={styles.links}>
                  <button
                    type="submit"
                    className={styles.button}
                  >
                    Realizar o pagamento
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Cart withAddress />
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>

      {loading || submiting ? <Loading /> : ''}
    </div>
  )
}

export default Payment
