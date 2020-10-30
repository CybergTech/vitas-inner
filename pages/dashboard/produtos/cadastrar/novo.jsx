/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'
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

  const [category, setCategory] = useState('')
  const [categoryIcon, setCategoryIcon] = useState('chevron-right')
  const [showCategoryModal, setShowCategoryModal] = useState(false)

  const [othersCategories, setOthersCategories] = useState([])
  const [othersCategoriesIcon, setOthersCategoriesIcon] = useState([])

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

  function changeCategory (value) {
    setCategory(value)

    if (value.length > 0) {
      setShowCategoryModal(true)
      setCategoryIcon('spinner')
    } else {
      setShowCategoryModal(false)
      setCategoryIcon('chevron-right')
    }
  }

  function handleClearCategoryModal () {
    setShowCategoryModal(false)
    setCategoryIcon('chevron-right')
  }

  function addOtherCategory () {
    setOthersCategories([
      ...othersCategories,
      { key: key, category: '', showModal: false }
    ])

    setKey(key + 1)
  }

  function removeOtherCategory (key) {
    // document.querySelector(`[data-key="${index}"]`).remove()
    const updatedOthersCategories = othersCategories.filter(otherCategory => otherCategory.key !== key)
    setOthersCategories(updatedOthersCategories)
  }

  function changeOtherCategory (position, field, value) {
    const updatedOthersCategories = othersCategories.map((otherCategory, index) => {
      if (index === position) {
        return {
          ...otherCategory,
          showModal: value.length > 0,
          [field]: value
        }
      }

      return otherCategory
    })

    setOthersCategories(updatedOthersCategories)
  }

  function handleClearOtherCategoryModal (position) {
    const updatedOthersCategories = othersCategories.map((otherCategory, index) => {
      if (index === position) {
        return {
          ...otherCategory,
          showModal: false
        }
      }

      return otherCategory
    })

    setOthersCategories(updatedOthersCategories)
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
    } else if (!exists(category)) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Por favor, preencha o campo de categoria!"
      />])
    } else {
      let othersCategoriesCheck = true
      othersCategories.forEach(otherCategory => {
        if (!exists(otherCategory.category)) {
          othersCategoriesCheck = false
        }
      })

      if (othersCategoriesCheck === false) {
        setMessages([...messages, <Message
          key={key}
          type="error"
          text="Uma das categorias extras está sem preencher."
        />])
      } else {
        setMessages([...messages, <Message
          key={key}
          type="success"
          text="Todos os dados foram preenchidos!"
        />])
      }
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
                    maxLength={200}
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
                    />

                    <div
                      className={`${styles.searchResult} ${showBrandModal ? `${styles.show} ${styles.zIndex799}` : styles.hide}`}
                    ></div>
                  </div>

                  <div className={styles.helpBlock}>
                    <Button
                      text="Não achei a marca, cadastrar uma nova"
                      withoutBack
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="category" className={styles.subtitle}>Categoria(s)</label>
                    <span className={styles.subtitleHelp}>
                      <FontAwesomeIcon icon="question-circle" />
                      <span></span>
                    </span>
                    <hr className={styles.line} />
                  </div>

                  <div className={styles.searchInputGroup}>
                    <div
                      className={`${styles.backgroundToSearch} ${showCategoryModal ? styles.show : styles.hide}`}
                      onClick={() => handleClearCategoryModal()}
                    ></div>

                    <div className={styles.row}>
                      <div className={styles.bigColumn}>
                        <Input
                          name="category"
                          value={category}
                          placeholder=""
                          icon={categoryIcon}
                          zIndex800={!!showCategoryModal}
                          onChange={e => changeCategory(e.target.value)}
                        />

                        <div
                          className={`${styles.searchResult} ${showCategoryModal ? `${styles.show} ${styles.zIndex799}` : styles.hide}`}
                        ></div>
                      </div>

                      <div className={styles.column}>
                        <Button
                          icon="plus"
                          text="Adicionar categoria"
                          style={{ width: '100%' }}
                          borderedButton
                          submitButton
                          onClick={() => addOtherCategory()}
                        />
                      </div>
                    </div>

                    {othersCategories.map((otherCategory, index) => (
                      <div className={styles.othersCategories} key={index}>
                        <div
                          className={`${styles.backgroundToSearch} ${otherCategory.showModal ? styles.show : styles.hide}`}
                          onClick={() => handleClearOtherCategoryModal(index)}
                        ></div>

                        <div className={`${styles.row} ${styles.otherCategory}`}>
                          <div className={styles.bigColumn}>
                            <Input
                              name={`category${index}`}
                              value={otherCategory.category}
                              placeholder=""
                              icon={categoryIcon}
                              zIndex800={!!otherCategory.showModal}
                              onChange={e => changeOtherCategory(index, 'category', e.target.value)}
                            />

                            <div
                              className={`${styles.searchResult} ${otherCategory.showModal ? `${styles.show} ${styles.zIndex799}` : styles.hide}`}
                            ></div>
                          </div>

                          <div className={`${styles.column} ${styles.fitContent}`}>
                            <Button
                              icon="minus"
                              borderedButton
                              submitButton
                              iconMarginNone
                              onClick={() => removeOtherCategory(otherCategory.key)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.helpBlock}>
                    <Button
                      text="Não achei a categoria, cadastrar uma nova"
                      withoutBack
                    />
                  </div>
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
