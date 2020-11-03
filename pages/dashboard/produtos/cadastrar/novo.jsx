/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../../../services/validation'

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
  const [title, setTitle] = useState('')

  const [brand, setBrand] = useState('')
  const [brandIcon, setBrandIcon] = useState('chevron-right')
  const [showBrandModal, setShowBrandModal] = useState(false)

  const [categories, setCategories] = useState([
    { key: key, name: '', icon: 'chevron-right', showModal: false }
  ])

  const [variation, setVariation] = useState(false)

  const [messages, setMessages] = useState([])

  function changeBrand (value) {
    setBrand(value)

    if (value.length > 0) {
      setShowBrandModal(true)
      setBrandIcon('spinner')
    } else {
      handleClearBrandModal()
    }
  }

  function handleClearBrandModal () {
    setShowBrandModal(false)
    setBrandIcon('chevron-right')
  }

  function addCategory () {
    setCategories([
      ...categories,
      { key: key, name: '', icon: 'chevron-right', showModal: false }
    ])

    setKey(key + 1)
  }

  function removeCategory (key) {
    const updatedCategories = categories.filter(category => category.key !== key)
    setCategories(updatedCategories)
  }

  function changeCategory (position, field, value) {
    const updatedCategories = categories.map((category, index) => {
      if (index === position) {
        return {
          ...category,
          showModal: value.length > 0,
          icon: (value.length > 0) ? 'spinner' : 'chevron-right',
          [field]: value
        }
      }

      return category
    })

    setCategories(updatedCategories)
  }

  function handleClearCategoryModal (position) {
    const updatedCategories = categories.map((category, index) => {
      if (index === position) {
        return {
          ...category,
          showModal: false,
          icon: 'chevron-right'
        }
      }

      return category
    })

    setCategories(updatedCategories)
  }

  function handleFormSubmit (e) {
    e.preventDefault()

    if (!exists(title)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de título do produto!"
      />])
    } else if (!exists(brand)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de marca!"
      />])
    } else {
      let categoriesCheck = true
      categories.forEach(category => {
        if (!exists(category.name)) {
          categoriesCheck = false
        }
      })

      if (categoriesCheck === false) {
        setMessages([...messages, <Message
          key={key}
          type="error"
          text="Uma das categorias está sem preencher."
        />])
      } else {
        setMessages([...messages, <Message
          key={key}
          type="success"
          text="Todos os dados foram preenchidos!"
        />])

        Router.push('/dashboard/produtos/cadastrar/novo2')
      }
    }

    setKey(key + 1)
  }

  return (
    <div className={`${grid.wrapper} ${minimizedMenu && grid.hideMenu}`}>
      <Head>
        <title>Novo - Cadastrar - Produtos - Ecovitas Marketplace</title>
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
              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="title" className={styles.subtitle}>Título do produto</label>
                  </div>
                  <Input
                    name="title"
                    value={title}
                    placeholder=""
                    icon="heading"
                    maxLength={[200, true]}
                    onChange={e => setTitle(e.target.value)}
                  />

                  <div className={styles.helpBlock}>
                    Dica: Somente o nome do produto (Sem a marca)
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="brand" className={styles.subtitle}>Marca</label>
                    <span className={styles.subtitleHelp}>
                      <FontAwesomeIcon icon="question-circle" />
                      <span>Pesquise e selecione a marca do produto a ser cadastrado (ProtDesc, Dellamed, etc...)</span>
                    </span>
                  </div>

                  <div className={styles.searchInputGroup}>
                    <div
                      className={`${styles.backgroundToSearch} ${showBrandModal ? styles.show : styles.hide}`}
                      onClick={() => handleClearBrandModal()}
                    ></div>

                    <Input
                      name="brand"
                      value={brand}
                      placeholder=""
                      icon={brandIcon}
                      zIndex800={!!showBrandModal}
                      onChange={e => changeBrand(e.target.value)}
                      onBlur={() => handleClearBrandModal()}
                    />

                    <div
                      className={`${styles.searchResult} ${showBrandModal ? `${styles.show} ${styles.zIndex799}` : styles.hide}`}
                    ></div>
                  </div>

                  {/* <div className={styles.helpBlock}>
                    <Button
                      text="Não achei a marca, cadastrar uma nova"
                      withoutBack
                    />
                  </div> */}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="category0" className={styles.subtitle}>Categoria(s)</label>
                    <span className={styles.subtitleHelp}>
                      <FontAwesomeIcon icon="question-circle" />
                      <span></span>
                    </span>
                    <hr className={styles.line} />
                  </div>

                  <div className={styles.searchInputGroup}>
                    {categories.map((category, index) => (
                      <div className={styles.row} key={index}>
                        <div
                          className={`${styles.backgroundToSearch} ${category.showModal ? styles.show : styles.hide}`}
                          onClick={() => handleClearCategoryModal(index)}
                        ></div>

                        <div className={`${styles.row} ${styles.category}`}>
                          <div className={styles.bigColumn}>
                            <Input
                              name={`category${index}`}
                              value={category.name}
                              placeholder=""
                              icon={category.icon}
                              zIndex800={!!category.showModal}
                              onChange={e => changeCategory(index, 'name', e.target.value)}
                              onBlur={() => handleClearCategoryModal(index)}
                            />

                            <div
                              className={`${styles.searchResult} ${category.showModal ? `${styles.show} ${styles.zIndex799}` : styles.hide}`}
                            ></div>
                          </div>

                          {index === 0
                            ? <div className={styles.column}>
                              <Button
                                icon="plus"
                                text="Adicionar categoria"
                                style={{ width: '100%' }}
                                borderedButton
                                submitButton
                                onClick={() => addCategory()}
                              />
                            </div>
                            : <div className={`${styles.column} ${styles.fitContent}`}>
                              <Button
                                icon="minus"
                                borderedButton
                                submitButton
                                iconMarginNone
                                onClick={() => removeCategory(category.key)}
                              />
                            </div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div className={styles.helpBlock}>
                    <Button
                      text="Não achei a categoria, cadastrar uma nova"
                      withoutBack
                    />
                  </div> */}
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.checkboxContainer}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        name="variation"
                        id="variationCheckbox"
                        className={styles.checkbox}
                        checked={variation}
                        onChange={() => setVariation(!variation)}
                      />
                      <span className={styles.checkboxCustom}></span>
                    </label>

                    <label
                      htmlFor="variationCheckbox"
                      className={styles.label}
                    >
                      Esse produto possui variação
                    </label>
                  </div>
                </div>

                <div className={styles.submitButtonContainer}>
                  <Button
                    type="submit"
                    text="Continuar"
                    style={{ width: '100%' }}
                    submitButton
                  />
                </div>
              </form>
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

export default NewProductRegister
