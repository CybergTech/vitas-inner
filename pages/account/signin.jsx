/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/main.module.css'

export async function getServerSideProps () {
  await new Promise(resolve => {
    setTimeout(resolve, 3000)
  })
  return { props: {} }
}

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Entre na plataforma - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header reduced></Header>
      </header>

      <main className={grid.main}>
        Sign in
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>
    </div>
  )
}

export default Home
