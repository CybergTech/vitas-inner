/* eslint-disable no-undef */
import React, { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { exists } from '../../../../services/validation'
import { eanMask, justNumbersMask } from '../../../../services/masks'

import AsideBar from '../../../../components/AsideBar'
import Header from '../../../../components/Header'
import Message from '../../../../components/Message'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import Select from '../../../../components/Select'
import Table from '../../../../components/Table'
import UploadModal from '../../../../components/UploadModal'

import 'suneditor/dist/css/suneditor.min.css'

import grid from '../../../../styles/grid/dashboard.module.css'
import mainStyles from '../../../../styles/main.module.css'
import dashboardStyles from '../../../../styles/Dashboard.module.css'
import styles from '../../../../styles/product/NewProductRegister.module.css'

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })

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

  const [sku, setSku] = useState('')
  const [helpSku, setHelpSku] = useState('')

  const [ean, setEan] = useState('')
  const [helpEan, setHelpEan] = useState('')

  const [photos, setPhotos] = useState([
    {}, {}, {}, {}
  ])

  const [show, setShow] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(false)

  const [height, setHeight] = useState('0,00')
  const [helpHeight, setHelpHeight] = useState('')

  const [width, setWidth] = useState('0,00')
  const [helpWidth, setHelpWidth] = useState('')

  const [length, setLength] = useState('0,00')
  const [helpLength, setHelpLength] = useState('')

  const [weight, setWeight] = useState('0,00')
  const [helpWeight, setHelpWeight] = useState('')

  const [activeStyle, setActiveStyle] = useState([
    '', '', ''
  ])

  const [principalFeatures, setPrincipalFeatures] = useState([
    { title: '', description: '' }
  ])
  const [helpPrincipalFeatures, setHelpPrincipalFeatures] = useState('')

  const [longDescription, setLongDescription] = useState('')
  const [helpLongDescription, setHelpLongDescription] = useState('')

  const variationsOptions = [
    { value: 'color', label: 'Cor' },
    { value: 'volume', label: 'Volume' },
    { value: 'height', label: 'Tamanho' }
  ]

  const [variations, setVariations] = useState([
    {
      title: 'color',
      variationsOfVariations: [{
        name: '',
        retailerMinStok: '0',
        retailerStok: '0',
        wholesalerMinStok: '0',
        wholesalerStok: '0',
        price: '0,00',
        vitasPrice: '0,00',
        vitasB2BPrice: '0,00',
        priceType: 'unique'
      }]
    }
  ])
  const [helpVariations, setHelpVariations] = useState('')

  const [messages, setMessages] = useState([])

  function changeSku (e) {
    setHelpSku('')
    setSku(e)
  }

  function changeEan (e) {
    setHelpEan('')
    setEan(eanMask(e))
  }

  function handleShowUploadModal (index) {
    setCurrentPhoto(index)
    setShow(true)
  }

  function clearPhoto (position) {
    const updatedPhotos = photos.map((photo, index) => {
      if (index === position) {
        return {}
      }
      return photo
    })

    setPhotos(updatedPhotos)
  }

  function changeHeight (e, maskedvalue, floatvalue) {
    setHelpHeight('')
    setHeight(maskedvalue)
  }
  function changeWidth (e, maskedvalue, floatvalue) {
    setHelpWidth('')
    setWidth(maskedvalue)
  }
  function changeLength (e, maskedvalue, floatvalue) {
    setHelpLength('')
    setLength(maskedvalue)
  }
  function changeWeight (e, maskedvalue, floatvalue) {
    setHelpWeight('')
    setWeight(maskedvalue)
  }

  function changeFreight (focused = null) {
    if (focused !== null) {
      if (focused === 'height') {
        setActiveStyle([styles.active, '', ''])
      } else if (focused === 'width') {
        setActiveStyle(['', styles.active, ''])
      } else if (focused === 'length') {
        setActiveStyle(['', '', styles.active])
      }
    } else {
      setActiveStyle(['', '', ''])
    }
  }

  function changePrincipalFeature (position = null, field, value) {
    const updatedPrincipalFeatures = principalFeatures.map((feature, index) => {
      if (index === position) {
        return {
          ...feature,
          [field]: value
        }
      }

      return feature
    })

    setHelpPrincipalFeatures('')
    setPrincipalFeatures(updatedPrincipalFeatures)
  }

  function addPrincipalFeature () {
    setPrincipalFeatures([
      ...principalFeatures,
      { title: '', description: '' }
    ])
  }

  function removePrincipalFeature (indexKey) {
    const updatedPrincipalFeatures = principalFeatures.filter((_, index) => index !== indexKey)
    setPrincipalFeatures(updatedPrincipalFeatures)
  }

  function changeLongDescription (e) {
    setHelpLongDescription('')
    setLongDescription(e)
  }

  function changeVariation (position = null, field, value) {
    const updatedVariations = variations.map((variation, index) => {
      if (index === position) {
        if (field === 'title') {
          let hasBeingChosen = false

          variations.every((variation_, index_) => {
            if (index_ !== index) {
              if (variation_.title === value) {
                hasBeingChosen = variationsOptions.filter(option => option.value === value)
                return false
              }
            }

            return true
          })

          if (hasBeingChosen !== false) {
            setMessages([...messages, <Message
              key={key}
              type="error"
              text={`A variação ${hasBeingChosen[0].label} já está sendo utilizada!`}
            />])
            setKey(key + 1)

            return variation
          }
        }

        return {
          ...variation,
          [field]: value
        }
      }

      return variation
    })

    setHelpVariations('')
    setVariations(updatedVariations)
  }

  function addVariation () {
    if (variations.length < variationsOptions.length) {
      let title = 'color'
      variationsOptions.every(option => {
        let hasBeingChosen = false

        variations.every(variation => {
          if (variation.title === option.value) {
            hasBeingChosen = true
            return false
          }

          return true
        })

        if (!hasBeingChosen) {
          title = option.value
          return false
        }

        return true
      })

      setVariations([
        ...variations,
        {
          title: title,
          variationsOfVariations: [{
            name: '',
            retailerMinStok: '0',
            retailerStok: '0',
            wholesalerMinStok: '0',
            wholesalerStok: '0',
            price: '0,00',
            priceType: 'unique'
          }]
        }
      ])
    }
  }

  function removeVariation (indexKey) {
    const updatedVariations = variations.filter((_, index) => index !== indexKey)
    setVariations(updatedVariations)
  }

  function changeVariationOfVariation (position, position_, field, value) {
    const updatedVariations = variations.map((variation, index) => {
      if (index === position) {
        const updatedVariationsOfVariations = variation.variationsOfVariations.map(
          (variation_, index_) => {
            if (index_ === position_) {
              return {
                ...variation_,
                [field]: value
              }
            }

            return variation_
          }
        )

        return {
          ...variation,
          variationsOfVariations: updatedVariationsOfVariations
        }
      }

      return variation
    })

    setVariations(updatedVariations)
  }

  function changeCurrencyOfVariation (index, index_, field, e, maskedvalue, floatvalue) {
    changeVariationOfVariation(index, index_, field, maskedvalue)
  }

  function addVariationOfVariation (position) {
    const updatedVariations = variations.map((variation, index) => {
      if (index === position) {
        return {
          ...variation,
          variationsOfVariations: [
            ...variation.variationsOfVariations,
            {
              name: '',
              retailerMinStok: '0',
              retailerStok: '0',
              wholesalerMinStok: '0',
              wholesalerstok: '0',
              price: '0,00',
              priceType: 'unique'
            }
          ]
        }
      }

      return variation
    })

    setVariations(updatedVariations)
  }

  function removeVariationOfVariation (position, position_) {
    const updatedVariations = variations.map((variation, index) => {
      if (index === position) {
        variation.variationsOfVariations.splice(position_, 1)
      }

      return variation
    })

    setVariations(updatedVariations)
  }

  function clearAllHelps () {
    setHelpSku('')
    setHelpEan('')

    setHelpHeight('')
    setHelpWidth('')
    setHelpLength('')
    setHelpWeight('')

    setHelpPrincipalFeatures('')
    setHelpLongDescription('')
  }

  function setAHelpError (text = '') {
    return <p className={styles.help}>
      <FontAwesomeIcon icon="exclamation-triangle" className={styles.icon} />
      {text}
    </p>
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    let status = 1

    clearAllHelps()

    if (!exists(sku)) {
      setHelpSku(
        setAHelpError('O SKU é obrigatório.')
      )
      status = 0
    }

    if (!exists(ean)) {
      setHelpEan(
        setAHelpError('O EAN é obrigatório.')
      )
      status = 0
    } else if (ean.length < 13) {
      setHelpEan(
        setAHelpError('O EAN precisa ter 13 números.')
      )
      status = 0
    }

    principalFeatures.every((feature, index) => {
      const titleCheck = !exists(feature.title)
      const descriptionCheck = !exists(feature.description)

      if (titleCheck || descriptionCheck) {
        let specific = titleCheck ? 'o título' : ''
        specific = descriptionCheck ? 'a descrição' : specific
        specific = titleCheck && descriptionCheck ? 'o título e a descrição' : specific

        setHelpPrincipalFeatures(
          setAHelpError(`A ${index + 1}ª característica está faltando ${specific}.`)
        )
        status = 0
        return false
      }

      return true
    })

    if (
      !exists(longDescription) ||
      longDescription === '<p></p>' ||
      longDescription === '<p><br></p>'
    ) {
      setHelpLongDescription(
        setAHelpError('A descrição longa é obrigatória.')
      )
      status = 0
    }

    if (
      !exists(height) ||
      height === '0,00'
    ) {
      setHelpHeight(
        setAHelpError('A altura da embalagem é obrigatória.')
      )
      status = 0
    }
    if (
      !exists(width) ||
      width === '0,00'
    ) {
      setHelpWidth(
        setAHelpError('A largura da embalagem é obrigatória.')
      )
      status = 0
    }
    if (
      !exists(length) ||
      length === '0,00'
    ) {
      setHelpLength(
        setAHelpError('O comprimento da embalagem é obrigatório.')
      )
      status = 0
    }
    if (
      !exists(weight) ||
      weight === '0,00'
    ) {
      setHelpWeight(
        setAHelpError('O peso da embalagem é obrigatório.')
      )
      status = 0
    }

    if (status === 0) {
      setMessages([...messages, <Message
        key={key}
        type="error"
        text="Ocorreu algum erro!"
      />])
    } else {
      setMessages([...messages, <Message
        key={key}
        type="success"
        text="Todos os dados foram preenchidos!"
      />])
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
          <Table fitContent withoutBack>
            <tbody className={styles.tbody}>
              <tr>
                <th>ID Ecovitas</th>
                <td>0003986236</td>
              </tr>
              <tr>
                <th>Título</th>
                <td>Máscara Descartável</td>
              </tr>
              <tr>
                <th>Marca</th>
                <td>ProtDesc</td>
              </tr>
              <tr>
                <th>Categoria(s)</th>
                <td>
                  <div>
                    Descartáveis <FontAwesomeIcon icon="chevron-right" className={styles.icon} /> Máscaras
                  </div>

                  <div>
                    Material para Resgate <FontAwesomeIcon icon="chevron-right" className={styles.icon} /> Máscaras
                  </div>
                </td>
              </tr>
              <tr>
                <th>
                  Slug <span className={styles.subtitleHelp} style={{ top: '-1px' }}>
                    <FontAwesomeIcon icon="question-circle" />
                    <span>Slug é como seu produto ficará na URL (Barra de endereço) na página única do mesmo</span>
                  </span>
                </th>
                <td>mascara-descartavel-protdesc-0003986236</td>
              </tr>
            </tbody>
          </Table>
        </section>

        <section className={mainStyles.section}>
          <div className={dashboardStyles.row}>
            <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wideColumn}`}>
              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="sku" className={styles.subtitle}>Mais sobre o produto</label>
                  </div>

                  <div className={styles.row}>
                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="sku" className={styles.inputLabel}>Seu SKU</label>

                      <Input
                        name="sku"
                        icon="chevron-right"
                        maxLength={[100, true]}
                        value={sku}
                        onChange={e => changeSku(e.target.value)}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpSku}
                      </div>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="ean" className={styles.inputLabel}>EAN</label>

                      <Input
                        name="ean"
                        icon="chevron-right"
                        value={ean}
                        onChange={e => changeEan(e.target.value)}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpEan}
                      </div>
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label className={styles.inputLabel}>Foto 1</label>
                      {Object.keys(photos[0]).length !== 0 &&
                        <span
                          className={styles.removePhotoButton}
                          onClick={() => clearPhoto(0)}
                        >
                          <FontAwesomeIcon icon="times" className={styles.icon} /> Remover
                        </span>
                      }

                      <button
                        type="button"
                        className={styles.photoButton}
                        onClick={() => handleShowUploadModal(0)}
                      >
                        <div className={styles.prefix}>
                          {Object.keys(photos[0]).length === 0
                            ? <FontAwesomeIcon icon="camera" className={styles.icon} />
                            : <img
                              src={photos[0].src}
                              alt={photos[0][0].name}
                              className={styles.photo}
                            />
                          }
                        </div>
                        <div className={styles.content}>
                          {Object.keys(photos[0]).length === 0
                            ? 'Insira a foto do produto'
                            : photos[0][0].name.length > 23 ? `${photos[0][0].name.substr(0, 23)}...` : photos[0][0].name
                          }
                        </div>
                      </button>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label className={styles.inputLabel}>Foto 2</label>
                      {Object.keys(photos[1]).length !== 0 &&
                        <span
                          className={styles.removePhotoButton}
                          onClick={() => clearPhoto(1)}
                        >
                          <FontAwesomeIcon icon="times" className={styles.icon} /> Remover
                        </span>
                      }

                      <button
                        type="button"
                        className={styles.photoButton}
                        onClick={() => handleShowUploadModal(1)}
                      >
                        <div className={styles.prefix}>
                          {Object.keys(photos[1]).length === 0
                            ? <FontAwesomeIcon icon="camera" className={styles.icon} />
                            : <img
                              src={photos[1].src}
                              alt={photos[1][0].name}
                              className={styles.photo}
                            />
                          }
                        </div>
                        <div className={styles.content}>
                          {Object.keys(photos[1]).length === 0
                            ? 'Insira a foto do produto'
                            : photos[1][0].name.length > 23 ? `${photos[1][0].name.substr(0, 23)}...` : photos[1][0].name
                          }
                        </div>
                      </button>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label className={styles.inputLabel}>Foto 3</label>
                      {Object.keys(photos[2]).length !== 0 &&
                        <span
                          className={styles.removePhotoButton}
                          onClick={() => clearPhoto(2)}
                        >
                          <FontAwesomeIcon icon="times" className={styles.icon} /> Remover
                        </span>
                      }

                      <button
                        type="button"
                        className={styles.photoButton}
                        onClick={() => handleShowUploadModal(2)}
                      >
                        <div className={styles.prefix}>
                          {Object.keys(photos[2]).length === 0
                            ? <FontAwesomeIcon icon="camera" className={styles.icon} />
                            : <img
                              src={photos[2].src}
                              alt={photos[2][0].name}
                              className={styles.photo}
                            />
                          }
                        </div>
                        <div className={styles.content}>
                          {Object.keys(photos[2]).length === 0
                            ? 'Insira a foto do produto'
                            : photos[2][0].name.length > 23 ? `${photos[2][0].name.substr(0, 23)}...` : photos[2][0].name
                          }
                        </div>
                      </button>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label className={styles.inputLabel}>Foto 4</label>
                      {Object.keys(photos[3]).length !== 0 &&
                        <span
                          className={styles.removePhotoButton}
                          onClick={() => clearPhoto(3)}
                        >
                          <FontAwesomeIcon icon="times" className={styles.icon} /> Remover
                        </span>
                      }

                      <button
                        type="button"
                        className={styles.photoButton}
                        onClick={() => handleShowUploadModal(3)}
                      >
                        <div className={styles.prefix}>
                          {Object.keys(photos[3]).length === 0
                            ? <FontAwesomeIcon icon="camera" className={styles.icon} />
                            : <img
                              src={photos[3].src}
                              alt={photos[3][0].name}
                              className={styles.photo}
                            />
                          }
                        </div>
                        <div className={styles.content}>
                          {Object.keys(photos[3]).length === 0
                            ? 'Insira a foto do produto'
                            : photos[3][0].name.length > 23 ? `${photos[3][0].name.substr(0, 23)}...` : photos[3][0].name
                          }
                        </div>
                      </button>
                    </div>
                  </div>

                  <UploadModal
                    show={show}
                    setShow={setShow}
                    photos={photos}
                    setPhotos={setPhotos}
                    currentPhoto={currentPhoto}
                  />
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label className={styles.subtitle}>Dados para cálculo do frete</label>
                    <span className={styles.subtitleHelp}>
                      <FontAwesomeIcon icon="question-circle" />
                      <span>Estas medidas são referente à embalagem do produto</span>
                    </span>
                  </div>

                  <div className={styles.row}>
                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="height" className={styles.inputLabel}>Altura</label>

                      <Input
                        name="height"
                        prefix={['m', 'right']}
                        maxLength={[10, false]}
                        currencyInput
                        decimalSeparator=","
                        thousandSeparator="."
                        value={height}
                        onChangeEvent={changeHeight}
                        onFocus={() => changeFreight('height')}
                        onBlur={() => changeFreight()}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpHeight}
                      </div>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="width" className={styles.inputLabel}>Largura</label>

                      <Input
                        name="width"
                        prefix={['m', 'right']}
                        maxLength={[10, false]}
                        currencyInput
                        decimalSeparator=","
                        thousandSeparator="."
                        value={width}
                        onChangeEvent={changeWidth}
                        onFocus={() => changeFreight('width')}
                        onBlur={() => changeFreight()}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpWidth}
                      </div>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="length" className={styles.inputLabel}>Comprimento</label>

                      <Input
                        name="length"
                        prefix={['m', 'right']}
                        maxLength={[10, false]}
                        currencyInput
                        decimalSeparator=","
                        thousandSeparator="."
                        value={length}
                        onChangeEvent={changeLength}
                        onFocus={() => changeFreight('length')}
                        onBlur={() => changeFreight()}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpLength}
                      </div>
                    </div>

                    <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                      <label htmlFor="weight" className={styles.inputLabel}>Peso</label>

                      <Input
                        name="weight"
                        prefix={['kg', 'right']}
                        maxLength={[10, false]}
                        currencyInput
                        decimalSeparator=","
                        thousandSeparator="."
                        value={weight}
                        onChangeEvent={changeWeight}
                      />

                      <div className={`${styles.helpBlock} ${styles.error}`}>
                        {helpWeight}
                      </div>
                    </div>

                    <div className={`${styles.biggestColumn} ${styles.center}`}>
                      {/* <div className={styles.wrap}>
                        <div className={styles.cube}>
                          <div className={styles.front}></div>
                          <div className={styles.back}></div>
                          <div className={styles.top}></div>
                          <div className={styles.bottom}></div>
                          <div className={styles.left}></div>
                          <div className={styles.right}></div>
                        </div>
                      </div> */}

                      <img
                        src="/images/freight.svg"
                        alt="Freight-Illustration"
                        className={styles.freightImage}
                      />

                      <h5 className={`${styles.freightHeight} ${activeStyle[0]}`}>Altura</h5>
                      <h5 className={`${styles.freightWidth} ${activeStyle[1]}`}>Largura</h5>
                      <h5 className={`${styles.freightLength} ${activeStyle[2]}`}>Comprimento</h5>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label htmlFor="title0" className={styles.subtitle}>Características principais</label>
                    <hr className={styles.line} />
                  </div>

                  {principalFeatures.map((feature, index) => (
                    <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wide}`} key={index}>
                      <div className={styles.row}>
                        <div className={styles.bigColumn}>
                          <Input
                            name={`title${index}`}
                            value={feature.title}
                            placeholder="Título"
                            icon="chevron-right"
                            onChange={e => changePrincipalFeature(index, 'title', e.target.value)}
                          />
                        </div>

                        <div className={styles.bigColumn}>
                          <Input
                            name={`description${index}`}
                            value={feature.description}
                            placeholder="Descrição"
                            icon="chevron-right"
                            onChange={e => changePrincipalFeature(index, 'description', e.target.value)}
                          />
                        </div>

                        <div className={`${styles.column} ${styles.fitContent}`}>
                          {index !== 0
                            ? <Button
                              icon="minus"
                              borderedButton
                              submitButton
                              iconMarginNone
                              onClick={() => removePrincipalFeature(index)}
                            />
                            : <Button
                              icon="plus"
                              borderedButton
                              submitButton
                              iconMarginNone
                              onClick={() => addPrincipalFeature(index)}
                            />
                          }
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className={`${styles.helpBlock} ${styles.error}`}>
                    {helpPrincipalFeatures}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label className={styles.subtitle}>Descrição longa</label>
                    <span className={styles.subtitleHelp}>
                      <FontAwesomeIcon icon="question-circle" />
                      <span>Este é o texto que será mostrado na visualização completa do produto</span>
                    </span>
                  </div>

                  <div className={dashboardStyles.row}>
                    <SunEditor
                      value={longDescription}
                      onChange={changeLongDescription}
                      lang="pt_br"
                      setDefaultStyle="font-family: Overpass-Regular; font-size: 14px; background-color: #161A1D; color: #FFF; border-radius: 2px;"
                      //
                      setOptions={{
                        height: 300,
                        paragraphStyles: [
                          'spaced',
                          'bordered',
                          {
                            name: 'Padrão',
                            class: '__se__customClass'
                          }
                        ],
                        buttonList: [
                          ['undo', 'redo'],
                          [':p-Mais Parágrafos-default.more_paragraph', 'paragraphStyle', 'blockquote'],
                          ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                          ['removeFormat'],
                          ['outdent', 'indent'],
                          ['list', 'lineHeight'],
                          ['template'],
                          ['-right', ':i-Mais-default.more_vertical', 'showBlocks', 'preview', 'print'],
                          ['-right', 'fullScreen']
                        ],
                        templates: [
                          {
                            name: 'Template Básico',
                            html: `
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                              <p><br></p>

                              <p><strong>Placeholder text commonly used:</strong></p>

                              <ul>
                                <li>Linha 1</li>
                                <li>Linha 2</li>
                                <li>Linha 3</li>
                              </ul>
                            `
                          }
                        ]
                      }}
                    />
                  </div>

                  <div className={`${styles.helpBlock} ${styles.error}`}>
                    {helpLongDescription}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.groupSubtitles}>
                    <label className={styles.subtitle}>Variações</label>
                    <hr className={styles.line} />
                  </div>

                  {variations.map((variation, index) => {
                    let currentVariation = ''
                    let variationHelp = ''
                    if (variation.title === 'color') {
                      currentVariation = 'cor'
                      variationHelp = 'Branco, Preto, Azul, ...'
                    } else if (variation.title === 'height') {
                      currentVariation = 'tamanho'
                    } else {
                      currentVariation = variation.title
                    }

                    return (
                      <div className={`${dashboardStyles.flexColumn} ${dashboardStyles.wide}`} key={index}>
                        {index !== 0 &&
                          <hr className={dashboardStyles.separationLine} />
                        }

                        <label htmlFor={`variationTitle${index}`} className={styles.highlightedLabel}>
                          Tipo de Variação
                        </label>

                        <div className={`${styles.row} ${styles.start}`}>
                          <div className={`${styles.column} ${styles.fitContent}`}>
                            <Select
                              name={`variationTitle${index}`}
                              value={variation.title}
                              onChange={e => changeVariation(index, 'title', e.target.value)}
                            >
                              {variationsOptions.map(option =>
                                <option key={option.value} value={option.value}>{option.label}</option>
                              )}
                            </Select>
                          </div>

                          <div className={`${styles.column} ${styles.fitContent}`}>
                            <Button
                              text={`+1 variação de ${currentVariation}`}
                              borderedButton
                              submitButton
                              iconMarginNone
                              onClick={() => addVariationOfVariation(index)}
                            />
                          </div>

                          <div className={`${styles.column} ${styles.fitContent}`}>
                            {index !== 0 &&
                              <Button
                                icon="minus"
                                borderedButton
                                submitButton
                                iconMarginNone
                                onClick={() => removeVariation(index)}
                              />
                            }
                          </div>
                        </div>

                        {variation.variationsOfVariations.map((variation_, index_) => (
                          <div className={styles.row} key={`${index}${index_}`}>
                            <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                              <div className={styles.columnMiniSubtitles}>
                                <div className={styles.miniSubtitles}>
                                  <label htmlFor={`nameVariation${index_}`} className={styles.inputLabel}>Variação</label>

                                  {exists(variationHelp) &&
                                    <span className={`${styles.subtitleHelp} ${styles.fitContent}`}>
                                      <FontAwesomeIcon icon="question-circle" />
                                      <span>{variationHelp}</span>
                                    </span>
                                  }
                                </div>
                              </div>

                              <Input
                                name={`nameVariation${index_}`}
                                // icon="chevron-right"
                                maxLength={[30, true]}
                                value={variation_.name}
                                onChange={e => changeVariationOfVariation(index, index_, 'name', e.target.value)}
                              />

                              <div className={`${styles.helpBlock} ${styles.error}`}>
                                {helpHeight}
                              </div>
                            </div>

                            <div className={styles.biggerColumn}>
                              <div className={styles.stokSubtitles}>
                                <label className={styles.subtitle}>Estoque Varejista</label>
                                <span className={styles.subtitleHelp}>
                                  <FontAwesomeIcon icon="question-circle" />
                                  <span>Estoque Varejista é relativo à venda de produtos à unidade ou em pequenas quantidades e será utilizado na Vita&apos;s para clientes comuns</span>
                                </span>
                                <hr className={styles.line} />
                              </div>

                              <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                                <div className={styles.columnMiniSubtitles}>
                                  <div className={styles.miniSubtitles}>
                                    <label htmlFor={`retailerMinStokVariation${index_}`} className={styles.inputLabel}>Estoque mínimo</label>

                                    <span className={`${styles.subtitleHelp}`}>
                                      <FontAwesomeIcon icon="question-circle" />
                                      <span>Quando o estoque deste produto chegar ao valor informado, você receberá uma mensagem para reabastecê-lo</span>
                                    </span>
                                  </div>
                                </div>

                                <Input
                                  name={`retailerMinStokVariation${index_}`}
                                  icon="boxes"
                                  currencyInput
                                  thousandSeparator="."
                                  precision="0"
                                  maxLength={[7, false]}
                                  value={variation_.retailerMinStok}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'retailerMinStok', e, maskedvalue, floatvalue)}
                                />

                                <div className={`${styles.helpBlock} ${styles.error}`}>
                                  {helpHeight}
                                </div>
                              </div>

                              <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                                <div className={styles.columnMiniSubtitles}>
                                  <div className={styles.miniSubtitles}>
                                    <label htmlFor={`retailerStokVariation${index_}`} className={styles.inputLabel}>Estoque</label>

                                    <span className={`${styles.subtitleHelp}`}>
                                      <FontAwesomeIcon icon="question-circle" />
                                      <span>Aqui vai estoque atual deste produto</span>
                                    </span>
                                  </div>
                                </div>

                                <Input
                                  name={`retailerStokVariation${index_}`}
                                  icon="boxes"
                                  currencyInput
                                  thousandSeparator="."
                                  precision="0"
                                  maxLength={[7, false]}
                                  value={variation_.retailerStok}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'retailerStok', e, maskedvalue, floatvalue)}
                                />

                                <div className={`${styles.helpBlock} ${styles.error}`}>
                                  {helpHeight}
                                </div>
                              </div>
                            </div>

                            <div className={styles.biggerColumn}>
                              <div className={styles.stokSubtitles}>
                                <label className={styles.subtitle}>Estoque Atacadista</label>
                                <span className={styles.subtitleHelp}>
                                  <FontAwesomeIcon icon="question-circle" />
                                  <span>Estoque Atacadista é relativo à venda de produtos em grandes quantidades e será utilizado na Vita&apos;s para Empresas</span>
                                </span>
                                <hr className={styles.line} />
                              </div>

                              <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                                <div className={styles.columnMiniSubtitles}>
                                  <div className={styles.miniSubtitles}>
                                    <label htmlFor={`wholesalerMinStokVariation${index_}`} className={styles.inputLabel}>Estoque mínimo</label>

                                    <span className={`${styles.subtitleHelp}`}>
                                      <FontAwesomeIcon icon="question-circle" />
                                      <span>Quando o estoque deste produto chegar ao valor informado, você receberá uma mensagem para reabastecê-lo</span>
                                    </span>
                                  </div>
                                </div>

                                <Input
                                  name={`wholesalerMinStokVariation${index_}`}
                                  icon="boxes"
                                  currencyInput
                                  thousandSeparator="."
                                  precision="0"
                                  maxLength={[7, false]}
                                  value={variation_.wholesalerMinStok}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'wholesalerMinStok', e, maskedvalue, floatvalue)}
                                />

                                <div className={`${styles.helpBlock} ${styles.error}`}>
                                  {helpHeight}
                                </div>
                              </div>

                              <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                                <div className={styles.columnMiniSubtitles}>
                                  <div className={styles.miniSubtitles}>
                                    <label htmlFor={`wholesalerStokVariation${index_}`} className={styles.inputLabel}>Estoque</label>

                                    <span className={`${styles.subtitleHelp}`}>
                                      <FontAwesomeIcon icon="question-circle" />
                                      <span>Aqui vai estoque atual deste produto</span>
                                    </span>
                                  </div>
                                </div>

                                <Input
                                  name={`wholesalerStokVariation${index_}`}
                                  icon="boxes"
                                  currencyInput
                                  thousandSeparator="."
                                  precision="0"
                                  maxLength={[7, false]}
                                  value={variation_.wholesalerStok}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'wholesalerStok', e, maskedvalue, floatvalue)}
                                />

                                <div className={`${styles.helpBlock} ${styles.error}`}>
                                  {helpHeight}
                                </div>
                              </div>
                            </div>

                            <div className={`${styles.bigColumn} ${dashboardStyles.flexColumn}`}>
                              <div className={styles.columnMiniSubtitles}>
                                <div className={styles.miniSubtitles}>
                                  <div className={styles.radioContainer} onChange={e => changeVariationOfVariation(index, index_, 'priceType', e.target.value)}>
                                    <input type="radio" id={`uniquePrice${index}${index_}`} value="unique" name={`priceTypeVariation${index}${index_}`} checked={variation_.priceType === 'unique'} />
                                    <label htmlFor={`uniquePrice${index}${index_}`} className={`${styles.inputLabel} ${styles.radioLabel}`}><span></span>Preço único</label>

                                    <input type="radio" id={`perStorePrice${index}${index_}`} value="perStore" name={`priceTypeVariation${index}${index_}`} checked={variation_.priceType === 'perStore'} />
                                    <label htmlFor={`perStorePrice${index}${index_}`} className={`${styles.inputLabel} ${styles.radioLabel}`}><span></span>Preço por loja</label>
                                  </div>
                                </div>
                              </div>

                              {variation_.priceType === 'unique'
                                ? <Input
                                  name={`priceVariation${index_}`}
                                  prefix={['R$', 'left']}
                                  currencyInput
                                  decimalSeparator=","
                                  thousandSeparator="."
                                  maxLength={[10, false]}
                                  value={variation_.price}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'price', e, maskedvalue, floatvalue)}
                                />
                                : <><Input
                                  name={`vitasPriceVariation${index_}`}
                                  prefix={['R$', 'left']}
                                  currencyInput
                                  decimalSeparator=","
                                  thousandSeparator="."
                                  maxLength={[10, false]}
                                  image={['logos/vitas.ico', 'left']}
                                  value={variation_.vitasPrice}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'vitasPrice', e, maskedvalue, floatvalue)}
                                />
                                <Input
                                  name={`vitasB2BPriceVariation${index_}`}
                                  prefix={['R$', 'left']}
                                  currencyInput
                                  decimalSeparator=","
                                  thousandSeparator="."
                                  maxLength={[10, false]}
                                  image={['logos/vitas.ico', 'left']}
                                  value={variation_.vitasB2BPrice}
                                  onChangeEvent={(e, maskedvalue, floatvalue) => changeCurrencyOfVariation(index, index_, 'vitasB2BPrice', e, maskedvalue, floatvalue)}
                                /></>
                              }

                              <div className={`${styles.helpBlock} ${styles.error}`}>
                                {helpHeight}
                              </div>
                            </div>

                            <div className={`${styles.column} ${styles.fitContent} ${styles.biggerMargin}`}>
                              {index_ !== 0 &&
                                <Button
                                  icon="minus"
                                  borderedButton
                                  submitButton
                                  iconMarginNone
                                  onClick={() => removeVariationOfVariation(index, index_)}
                                />
                              }
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}

                  <div
                    className={`${dashboardStyles.flexColumn} ${dashboardStyles.wide}`}
                    style={{ marginTop: '2.5rem' }}
                  >
                    <div className={`${styles.column} ${styles.fitContent}`}>
                      <Button
                        icon="plus"
                        text="Adicionar variação"
                        borderedButton
                        submitButton
                        onClick={() => addVariation()}
                        disabled={variations.length >= variationsOptions.length}
                      />
                    </div>
                  </div>

                  <div className={`${styles.helpBlock} ${styles.error}`}>
                    {helpPrincipalFeatures}
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

      <style jsx global>{`
        .grecaptcha-badge {
          z-index: 2000;
        }

        .sun-editor {
          background-color: #383B3E;
          border-color: #383B3E;
          border-width: 5px;
          border-radius: 2px;
        }

        .sun-editor .se-wrapper,
        .sun-editor .se-wrapper-inner.se-wrapper-wysiwyg.sun-editor-editable {
          border-radius: 2px 2px 0 0;
          background-color: #161A1D;
          color: #FFF;
        }

        .se-toolbar.sun-editor-common {
          border-radius: 2px 2px 0 0;
          background-color: #383B3E;
          outline-color: #383B3E;
        }

        .sun-editor .se-tooltip .se-tooltip-inner .se-tooltip-text {
          background-color: #FFF;
          color: #383B3E;
          z-index: 50;
        }
        .sun-editor .se-tooltip .se-tooltip-inner .se-tooltip-text:after {
          border-bottom-color: #FFF;
        }

        .se-btn-module.se-btn-module-border {
          border-color: #FFF7;
        }

        .sun-editor button {
          color: #FFF;
        }

        .sun-editor .se-btn-list:disabled,
        .sun-editor .se-btn:disabled,
        .sun-editor button:disabled {
          color: #FFF3;
        }

        .sun-editor .se-btn-module .se-btn:not(:disabled):hover,
        .sun-editor .se-btn:not(:disabled):hover,
        .sun-editor .se-btn-module .se-btn.on,
        .sun-editor .se-tooltip.se-btn.on {
          background-color: #22FF7A;
          color: #161A1D;
        }

        .sun-editor .se-btn-module .se-btn.active,
        .sun-editor .se-tooltip.se-btn.active {
          color: #22FF7A;
        }

        .sun-editor .se-btn-module .se-btn-more.on {
          background-color: #22FF7A;
          color: #161A1D;
        }
        .sun-editor .se-btn-module .se-btn-more.on:hover,
        .sun-editor .se-tooltip.se-btn.on:hover,
        .sun-editor .se-tooltip.se-btn.active:hover {
          background-color: #22FF7Add;
          color: #161A1D;
        }

        .se-resizing-bar.sun-editor-common {
          border-radius: 0 0 2px 2px;
          background-color: #22FF7A;
          border-color: #22FF7A;
          min-height: 20px;
        }
        .sun-editor .se-navigation.sun-editor-common {
          color: #161A1D;
          line-height: 2;
        }

        .sun-editor .se-list-layer {
          border-color: #FFF;
          border-radius: 2px;
        }
        .sun-editor .se-list-inner .se-list-basic button {
          color: #161A1D;
        }

        .sun-editor .se-toolbar-more-layer {
          border-radius: 2px 2px 0 0;
          background-color: #FFF3;
        }

        .sun-editor .se-toolbar-more-layer .se-more-layer {
          border-color: transparent;
          border-radius: 2px 2px 0 0;
        }
      `}</style>
    </div>
  )
}

export default NewProductRegister
