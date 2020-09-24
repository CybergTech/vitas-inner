/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import api from '../services/api'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import BannersCarousel from '../components/BannersCarousel'
import Announcements from '../components/Announcements'
import PromotionalCards from '../components/PromotionalCards'
import DetailDots from '../components/DetailDots'
import BrandsCarousel from '../components/BrandsCarousel'
import ProductItem from '../components/ProductItem'
import Footer from '../components/Footer'

import grid from '../styles/grid/main.module.css'
import styles from '../styles/main.module.css'

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
        <title>Início - Vita{"'"}s Materiais Médicos e Hospitalares</title>
        <meta name="description" content="Vita's, O seu bem estar em primeiro lugar. Há mais de 30 anos no mercado de materiais médicos e hospitalares." />
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header />
      </header>

      <section className={grid.promotionalCarousel}>
        <BannersCarousel />
      </section>

      <main className={grid.main}>
        <Announcements />
        <PromotionalCards />

        <section className={styles.contentSection}>
          <h2 className={styles.titleSection}>MARCAS</h2>
          <DetailDots style={{ right: '97%', top: '83px' }} />

          <div className={styles.brandList}>
            <BrandsCarousel />
          </div>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.titleSection}>MAIS VENDIDOS</h2>
          <DetailDots style={{ left: '95.5%', top: '70px' }} />
          <DetailDots style={{ right: '95.5%', bottom: '40px' }} />

          <div className={styles.productList}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>

        {/* <h1>Vita&apos;s Materiais Médicos e Hospitalares - Home</h1>
        <h4>Server Response - {message}</h4>

        <img style={{ width: '100px' }} src="/images/detail-dots.svg" alt="Dots"/> */}
      </main>

      <footer className={grid.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
