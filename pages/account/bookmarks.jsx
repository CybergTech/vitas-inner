/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Path from '../../components/Path'
import DetailDots from '../../components/DetailDots'
import ProductItem from '../../components/ProductItem'
import BrandItem from '../../components/BrandItem'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/nobanners.module.css'
import styles from '../../styles/main.module.css'

const paths = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Lista de Desejos',
    href: '/account/bookmarks'
  }
]

const Item = {
  index: 0,
  name: 'Mercur',
  slogan: 'O mundo de um jeito bom pra todo o mundo',
  src: 'mercur.svg',
  url: '#!'
}

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
        <Path paths={paths} />

        <div className={styles.contentSection}>
          <h2 className={styles.titleSection}>PRODUTOS</h2>
          <DetailDots style={{ right: '92.5%', top: '-10px' }} />

          <div className={styles.productList}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.titleSection}>MARCAS</h2>
          <DetailDots style={{ right: '92.5%', top: '-10px' }} />

          <div className={styles.productList}>
            <BrandItem brand={Item} />
          </div>
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer maps={false} />
      </footer>
    </div>
  )
}

export default Home
