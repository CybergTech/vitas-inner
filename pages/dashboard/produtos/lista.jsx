/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../../services/validation'

import AsideBar from '../../../components/AsideBar'
import Header from '../../../components/Header'
import Message from '../../../components/Message'
import Button from '../../../components/Button'
import Select from '../../../components/Select'
import Input from '../../../components/Input'

import grid from '../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../styles/main.module.css'
import dashboardStyles from '../../../styles/Dashboard.module.css'
import buttonStyles from '../../../components/Button/styles.module.css'
import styles from '../../../styles/ProductList.module.css'

const Items = [
  {
    sku: 234324,
    id: 756345,
    image: 'alicate.png',
    title: 'Alicate de Corte Espícula',
    stock: 24,
    price: 'R$ 69,90',
    status: 1
  }
]

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
    name: 'Lista',
    href: '/dashboard/produtos/lista'
  }
]

function ProductList () {
  const [minimizedMenu, setMinimizedMenu] = useState(false)

  const [key, setKey] = useState(0)
  const [messages, setMessages] = useState([])
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('sku')
  const [perPage, setPerPage] = useState('10')
  const [whatsapp, setWhatsapp] = useState(false)

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
        <title>Lista - Produtos - Ecovitas Marketplace</title>
      </Head>

      <aside className={grid.aside}>
        <AsideBar activeLink="product-list" minimizedMenu={minimizedMenu} />
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
              icon="plus"
              text="Adicionar produto"
              link="/dashboard/produtos/cadastrar"
            />
          </div>
        </section>

        <section className={mainStyles.section}>
          <div className={dashboardStyles.row}>
            <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wideColumn}`}>

              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <Select
                  name="searchType"
                  value={searchType}
                  onChange={e => setSearchType(e.target.value)}
                  style={{ marginRight: '1rem' }}
                >
                  <optgroup label="Tipo de pesquisa">
                    <option value="sku">Seu SKU</option>
                    <option value="idecovitas">ID Ecovitas</option>
                    <option value="name">Nome do produto</option>
                  </optgroup>
                </Select>

                <Input
                  name="search"
                  value={search}
                  placeholder=""
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

          <div className={styles.tableContainer}>
            <div className={`${dashboardStyles.row} ${dashboardStyles.start}`}>
              <label htmlFor="perPage">Mostrar </label><Select
                name="perPage"
                value={perPage}
                mini
                onChange={e => setPerPage(e.target.value)}
                style={{ marginLeft: '.5rem' }}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </Select>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th>
                    <div className={styles.checkboxContainer}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="whatsapp"
                          id="whatsappCheckbox"
                          className={styles.checkbox}
                          checked={whatsapp}
                          onChange={() => setWhatsapp(!whatsapp)}
                        />
                        <span className={styles.checkboxCustom}></span>
                      </label>
                    </div>
                  </th>
                  <th>SKU</th>
                  <th>ID ECOVITAS</th>
                  <th>IMAGEM/TÍTULO</th>
                  <th>ESTOQUE</th>
                  <th>PREÇO</th>
                  <th>SITUAÇÃO</th>
                  <th>AÇÕES</th>
                </tr>
              </thead>

              <tbody>
                {Items.map(item => (
                  <tr key={item.sku}>
                    <td>
                      <div className={styles.checkboxContainer}>
                        <label className={styles.checkboxLabel}>
                          <input
                            type="checkbox"
                            className={styles.checkbox}
                            checked={whatsapp}
                            onChange={() => setWhatsapp(!whatsapp)}
                          />
                          <span className={styles.checkboxCustom}></span>
                        </label>
                      </div>
                    </td>
                    <td>
                      {item.sku}
                    </td>
                    <td>
                      {item.id}
                    </td>
                    <td>
                      <div className={styles.row}>
                        <img src={`/images/products/${item.image}`} alt={`${item.title}`} />
                        {item.title}
                      </div>
                    </td>
                    <td>
                      {item.stock}
                    </td>
                    <td>
                      {item.price}
                      {/* {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })} */}
                    </td>
                    <td>
                      {item.status === 1
                        ? <span>
                          <FontAwesomeIcon icon="check-circle" className={styles.success} />
                          <span>Não há pendências referente à este produto</span>
                        </span>
                        : ''
                      }
                    </td>
                    <td>
                      <Button
                        icon="pen-alt"
                        mini
                      />

                      <Button
                        icon="ellipsis-v"
                        mini
                      >
                        <div className={buttonStyles.menu}>
                          <button className={buttonStyles.menuItem}>Ver detalhes</button>
                          <button className={buttonStyles.menuItem}>Deletar</button>
                        </div>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={`${dashboardStyles.row} ${dashboardStyles.end}`}>
              <div className={styles.pagination}>1-{perPage} de 246</div>

              <div className={styles.paginationButtons}>
                <div className={styles.bigStepsButtons}>
                  <button className={styles.button} disabled>
                    <FontAwesomeIcon icon="step-backward" className={styles.icon} />
                    <span>Volte 5 páginas</span>
                  </button>
                  <button className={styles.button} disabled>
                    <FontAwesomeIcon icon="chevron-left" className={styles.icon} />
                    <span>Volte 1 página</span>
                  </button>
                </div>

                <button className={styles.button} disabled>1</button>
                <button className={styles.button}>2</button>
                <button className={styles.button}>3</button>

                <span>...</span>

                <button className={styles.button}>8</button>
                <button className={styles.button}>9</button>
                <button className={styles.button}>10</button>

                <div className={styles.bigStepsButtons}>
                  <button className={styles.button}>
                    <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
                    <span>Avance 1 página</span>
                  </button>
                  <button className={styles.button}>
                    <FontAwesomeIcon icon="step-forward" className={styles.icon} />
                    <span>Avance 5 páginas</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="messagesContainer">
        {messages}
      </div>
    </div>
  )
}

export default ProductList
