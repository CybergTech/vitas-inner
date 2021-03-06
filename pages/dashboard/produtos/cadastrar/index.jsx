/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../../../services/validation'

import AsideBar from '../../../../components/AsideBar'
import Header from '../../../../components/Header'
import Message from '../../../../components/Message'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import ProductItem from '../../../../components/ProductItem'

import grid from '../../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../../styles/main.module.css'
import dashboardStyles from '../../../../styles/Dashboard.module.css'
import styles from '../../../../styles/product/ProductRegister.module.css'

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
  }
]

function ProductRegister () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  const [key, setKey] = useState(0)
  const [messages, setMessages] = useState([])
  const [search, setSearch] = useState('')

  const [buttonText, setButtonText] = useState('Buscar')

  useEffect(() => {
    if (localStorage.minimizedMenu !== undefined) {
      setMinimizedMenu(localStorage.minimizedMenu === 'true')
    }
  }, [])

  function changeSearch (e) {
    setSearch(e)
  }

  function handleFormSubmit (e) {
    e.preventDefault()

    setButtonText(<FontAwesomeIcon icon="spinner" pulse />)

    const productsListContainer = document.querySelector(`.${styles.productList}`)
    productsListContainer.style.display = 'none'

    if (!exists(search)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de pesquisa!"
      />])
      setButtonText('Buscar')
    } else if (search.length <= 3) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, seja mais específico em sua pesquisa!"
      />])
      setButtonText('Buscar')
    } else {
      setTimeout(() => {
        productsListContainer.style.display = 'flex'
        setButtonText('Buscar')
      }, 2000)
    }

    setKey(key + 1)
  }

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
              <h3 className={mainStyles.sectionTitle}>Qual produto você deseja cadastrar?</h3>

              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <Input
                  name="search"
                  value={search}
                  placeholder="Escreva o nome ou EAN do produto"
                  icon="search"
                  onChange={e => changeSearch(e.target.value)}
                />

                <Button
                  text={buttonText}
                  type="submit"
                  submitButton
                  style={{ marginLeft: '1rem' }}
                />
              </form>
            </div>
          </div>

          <div className={styles.productList}>
            <div className={dashboardStyles.row}>
              <Button
                icon="long-arrow-alt-right"
                text="Cadastrar novo produto"
                link="/dashboard/produtos/cadastrar/novo"
                reverse
              />
            </div>

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
      </main>

      <div className="messagesContainer">
        {messages}
      </div>
    </div>
  )
}

export default ProductRegister
