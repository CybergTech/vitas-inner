import React, { useState } from 'react'
import Head from 'next/head'

import AsideBar from '../../components/AsideBar'
import Header from '../../components/Header'
import Clock from '../../components/Clock'
import Reminders from '../../components/Reminders'
import SalesReport from '../../components/SalesReport'
import Statistics from '../../components/Statistics'
import EcoSellerIndex from '../../components/EcoSellerIndex'
import TopProductsList from '../../components/TopProductsList'
import ProductsBrief from '../../components/ProductsBrief'
import Rating from '../../components/Rating'

import grid from '../../styles/grid/dashboard.module.css'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/Dashboard.module.css'

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  }
]

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
        <Header
          minimizedMenu={minimizedMenu}
          setMinimizedMenu={setMinimizedMenu}
          paths={paths}
        />
      </header>

      <main className={grid.main}>
        <section className={mainStyles.section}>
          <div className={styles.row}>
            <div className={`${styles.flexColumn} ${styles.clockAndGraphics}`}>
              <div className={styles.row}>
                <Clock />
                <Reminders />
              </div>

              <SalesReport />
            </div>

            <div className={`${styles.flexColumn} ${styles.statitics}`}>
              <Statistics />
            </div>
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={styles.row}>
            <div className={`${styles.flexColumn} ${styles.normalColumn}`}>
              <EcoSellerIndex />
            </div>

            <div className={`${styles.flexColumn} ${styles.normalColumn}`}>
              <TopProductsList />
            </div>
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={styles.row}>
            <div className={`${styles.flexColumn} ${styles.brief}`}>
              <ProductsBrief />
            </div>

            <div className={`${styles.flexColumn} ${styles.rating}`}>
              <Rating />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
