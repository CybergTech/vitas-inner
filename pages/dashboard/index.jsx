import React, { useState } from 'react'
import Head from 'next/head'

import AsideBar from '../../components/AsideBar'
import Header from '../../components/Header'

import grid from '../../styles/grid/dashboard.module.css'
import styles from '../../styles/Home.module.css'

function Dashboard () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Dashboard - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="dashboard" minimizedMenu={minimizedMenu} />
      </aside>

      <header className={grid.header}>
        <Header minimizedMenu={minimizedMenu} setMinimizedMenu={setMinimizedMenu} />
      </header>

      <main className={grid.main}>
        <section className={styles.section}>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
