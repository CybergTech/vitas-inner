/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import DetailDots from '../components/DetailDots'
import Footer from '../components/Footer'

import grid from '../styles/grid/nobanners.module.css'
import mainStyles from '../styles/main.module.css'
import styles from '../styles/404.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Página não encontrada - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <main className={grid.main}>
        <section className={mainStyles.contentSection}>
          <div className={styles.container}>
            <DetailDots style={{ right: '95%', bottom: '-27px' }} />

            <div className={styles.subtitles}>
              <h2 className={styles.title}>
                A página que você está buscando<br/>
                não foi encontrada :/
              </h2>

              <h4 className={styles.subtitle}>
                Isso pode ter acontecido por que o conteúdo não está mais no ar ou você pode ter digitado o endereço errado.
              </h4>

              <button type="button" className={styles.button}>
                <Link href="/">
                  <a>Voltar à página principal</a>
                </Link>
              </button>
            </div>

            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon="times-circle"
                className={styles.icon}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={grid.footer}>
        <Footer maps={false} newsletter={false} />
      </footer>
    </div>
  )
}

export default Home
