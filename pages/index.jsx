/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import api from '../services/api'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'

import grid from '../styles/grid/main.module.css'

export async function getStaticProps () {
  const message = await api.get('/api/')
    .then(res => res.data)
    .catch(_ => 'Um erro ocorreu ao buscar a resposta do servidor.')

  return {
    props: {
      message
    }
  }
}

function Home ({ message }) {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Vita&apos;s Materiais Médicos e Hospitalares - Home</title>
      </Head>

      <div className={grid.topHeader}>
        <TopHeader></TopHeader>
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <div className={grid.promotionalCarousel}>
        <img style={{ width: '100%' }} src="/images/vitas-banner.jpg" alt="Banner"/>
      </div>

      <main className={grid.main}>
        <h1>Vita&apos;s Materiais Médicos e Hospitalares - Home</h1>
        <h4>Server Response - {message}</h4>

        <img style={{ width: '100px' }} src="/images/detail-dots.svg" alt="Dots"/>

        <h1>-</h1>
      </main>

      <footer className={grid.footer}>
        Footer
      </footer>
    </div>
  )
}

export default Home
