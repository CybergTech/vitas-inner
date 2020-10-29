/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'

import AsideBar from '../../../../components/AsideBar'
import Header from '../../../../components/Header'
import Message from '../../../../components/Message'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'

import grid from '../../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../../styles/main.module.css'
import dashboardStyles from '../../../../styles/Dashboard.module.css'
import styles from '../../../../styles/product/NewProductRegister.module.css'

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

  const [key, setKey] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [messages, setMessages] = useState([])

  function handleFormSubmit (e) {
    e.preventDefault()

    if (!exists(email) && !exists(password)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de email e senha!"
      />])
    } else if (!exists(email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de email!"
      />])
    } else if (!validEmail(email)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha um email válido!"
      />])
    } else if (!exists(password)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de senha!"
      />])
    } else {
      setMessages([...messages, <Message
        key={key}
        type="success"
        text="Todos os dados foram preenchidos!"
      />])
    }

    setKey(key + 1)
    Router.push('/dashboard')
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
          <div className={dashboardStyles.row}>
            <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wideColumn}`}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <Input
                    name="email"
                    value={email}
                    placeholder="Email"
                    icon="envelope"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <Input
                    name="password"
                    value={password}
                    placeholder="Senha"
                    type="password"
                    icon="lock"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  text="Continuar"
                  style={{ width: '13%' }}
                  submitButton
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default NewProductRegister
