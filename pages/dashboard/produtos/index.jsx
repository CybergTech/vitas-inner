import React, { useState } from 'react'
import Head from 'next/head'

import AsideBar from '../../../components/AsideBar'
import Header from '../../../components/Header'

import grid from '../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../styles/main.module.css'
// import styles from '../../../styles/Dashboard.module.css'

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Produtos',
    href: '/dashboard/produtos'
  }
]

function productPainel () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Dashboard - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="product-painel" minimizedMenu={minimizedMenu} />
      </aside>

      <header className={grid.header}>
        <Header
          minimizedMenu={minimizedMenu}
          setMinimizedMenu={setMinimizedMenu}
          paths={paths}
        />
      </header>

      <main className={grid.main}>
        <section className={mainStyles.section}>
        </section>
      </main>
    </div>
  )
}

export default productPainel
