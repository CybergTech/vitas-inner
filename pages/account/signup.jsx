/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import mainStyles from '../../styles/main.module.css'

function Signup () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Cadastre-se na plataforma - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header reduced></Header>
      </header>

      <main className={grid.main}>
        <div className={mainStyles.signContainer}>
          Signup
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>
    </div>
  )
}

export default Signup
