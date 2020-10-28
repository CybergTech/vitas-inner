/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'

import AsideBar from '../../../../components/AsideBar'
import Header from '../../../../components/Header'
import Button from '../../../../components/Button'

import grid from '../../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../../styles/main.module.css'
import dashboardStyles from '../../../../styles/Dashboard.module.css'

const paths = [
  {
    name: 'Dashboard',
    href: '/dashboard'
  },
  {
    name: 'Produtos',
    href: '/dashboard/produtos'
  },
  {
    name: 'Cadastrar',
    href: '/dashboard/produtos/cadastrar'
  },
  {
    name: 'Novo',
    href: '/dashboard/produtos/cadastrar/novo'
  }
]

function NewProductRegister () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Cadastrar - Produtos - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="product-register" minimizedMenu={minimizedMenu} />
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
          <div className={`${dashboardStyles.row} ${dashboardStyles.start}`}>
            <Button
              icon="box"
              text="Painel de produtos"
              link="/dashboard/produtos"
            />

            <Button
              icon="th-list"
              text="Lista dos produtos"
              link="/dashboard/produtos/lista"
            />
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={dashboardStyles.row}>
            <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wideColumn}`}>
              <h3 className={mainStyles.sectionTitle}>Cadastrar o novo produto</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default NewProductRegister
