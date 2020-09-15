/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'

import grid from '../../styles/grid/main.module.css'

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Vita&apos;s Materiais Médicos e Hospitalares - Entre na plataforma</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header reduced></Header>
      </header>

      <main className={grid.main}>
        Sign in
      </main>

      <footer className={grid.footer}>
        Footer
      </footer>
    </div>
  )
}

export default Home
