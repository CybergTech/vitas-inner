/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/main.module.css'

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Lista de Desejos - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <main className={grid.main}>
        Bookmarks
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} />
      </footer>
    </div>
  )
}

export default Home
