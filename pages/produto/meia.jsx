/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'

import { product } from '../../lib/product/meia'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Path from '../../components/Path'
import DetailDots from '../../components/DetailDots'
import MinusAndPlusButtons from '../../components/ProductItem/MinusAndPlusButtons'
import Table from '../../components/Table'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/nobanners.module.css'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/Product.module.css'

function Product () {
  const allImages = product.photos
  const [currentImage, setCurrentImage] = useState(product.photos[0])
  const [isHoveringShareIcon, setIsHoveringShareIcon] = useState(false)
  const [isHoveringImage, setIsHoveringImage] = useState(false)

  const [question, setQuestion] = useState('')

  useEffect(() => {
    // Zoom Viewer
    const image = document.querySelector('.imageToZoom img')
    const zoomViewer = document.querySelector('.zoomViewer')

    image.addEventListener('mousemove', function (e) {
      setIsHoveringImage(true)
      const width = e.target.offsetWidth
      const height = e.target.offsetHeight
      const mouseX = e.offsetX
      const mouseY = e.offsetY

      console.log(mouseY + ' : ' + mouseX)

      const bgPosX = (mouseX / width * 100)
      const bgPosY = (mouseY / height * 100)

      zoomViewer.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`
    })

    image.addEventListener('mouseleave', function (e) {
      setIsHoveringImage(false)
    })
  }, [])

  function handleFormSubmit (e) {
    e.preventDefault()
    console.log('Submit')
  }

  const paths = [
    {
      name: 'Home',
      href: '/'
    },
    ...product.categories,
    {
      name: product.name,
      href: `/produto/${product.nameUrl}`
    }
  ]

  function goToItem (index) {
    setCurrentImage(allImages[index])
    activeItem(index)
  }

  function activeItem (index) {
    document.querySelectorAll('.imagesListItem').forEach((e, i) => {
      if (i === index) {
        return e.classList.add(styles.active)
      }
      return e.classList.remove(styles.active)
    })
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>{product.name} - Vita&apos;s Materiais Médicos e Hospitalares</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <main className={grid.main}>
        <Path paths={paths} />

        <section className={mainStyles.contentSection}>
          <DetailDots style={{ right: '99.5%', top: '130px' }} />

          <div className={styles.mainContainer}>
            <div className={styles.picturesContainer}>
              <ul className={styles.list}>
                {allImages.map((image, index) => (
                  <li
                    key={image.index}
                    className={`${styles.item} imagesListItem ${index === 0 && styles.active}`}
                    onMouseOver={() => goToItem(image.index)}
                  >
                    <img
                      src={`/images/products/${image.src}`}
                      alt={image.title}
                      title={image.title}
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.imageWrap}>
                <div
                  className={`${styles.image} imageToZoom`}
                  title={currentImage.title}
                >
                  <img
                    src={`/images/products/${currentImage.src}`}
                    alt={currentImage.title}
                  />
                </div>
              </div>
            </div>

            <div className={styles.infoContainer}>
              <div
                className={`${styles.zoomContainer} ${isHoveringImage ? styles.zoomShow : styles.zoomHide}`}
              >
                <div
                  className={`${styles.zoomViewer} zoomViewer`}
                  style={{ backgroundImage: `url('/images/products/${currentImage.src}')` }}
                ></div>
              </div>

              <div className={styles.actionsContent}>
                <div className={`${styles.actionItem} ${styles.heartIcon}`}>
                  <input
                    type="image"
                    src="/images/icons/empty-gray-heart.svg"
                    title="Adicionar à Lista de Desejos"
                  />
                </div>
                <div
                  className={`${styles.actionItem}`}
                  onMouseEnter={() => setIsHoveringShareIcon(true)}
                  onMouseLeave={() => setIsHoveringShareIcon(false)}
                >
                  <FontAwesomeIcon icon="share-alt" />

                  <div
                    className={isHoveringShareIcon ? styles.showShare : styles.hideShare}
                  >
                    <div className={styles.separatorIcon}>
                      <FontAwesomeIcon icon="chevron-right" />
                    </div>

                    <div className={`${styles.shareItem}`}>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${product.name}&url=https://vitas.com.br/produto/${product.nameUrl}&via=vitas`}
                        title="Compartilhar com o Twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </a>
                    </div>
                    <div className={`${styles.shareItem}`}>
                      <a
                        href={`https://www.facebook.com/sharer.php?u=https://vitas.com.br/produto/${product.nameUrl}`}
                        title="Compartilhar com o Facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </a>
                    </div>
                    <div className={`${styles.shareItem}`}>
                      <a
                        href={`https://web.whatsapp.com/send?text=${product.name} https://vitas.com.br/produto/${product.nameUrl}`}
                        title="Compartilhar com o WhatsApp Web"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                      </a>
                    </div>
                    <div className={`${styles.shareItem}`}>
                      <a
                        href={`https://web.whatsapp.com/send?text=${product.name} https://vitas.com.br/produto/${product.nameUrl}`}
                        title="Compartilhar com o Email"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon="envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.nameDisplay}>
                <ul className={styles.categories}>
                  {product.categories.map((category, index) => (
                    <li key={index} className={styles.category}>
                      {category.name} {product.categories[index + 1] && <span className={styles.separation}>•</span>}
                    </li>
                  ))}
                  {/* Podologia&nbsp;&nbsp;•&nbsp;&nbsp;Alicates de Corte Espicula */}
                </ul>
                <h2 className={styles.name}>
                  {product.name}
                </h2>

                <div className={styles.price}>
                  <h6 className={styles.storePrice}>
                    Na loja física <span className={styles.lineThrough}>R$ 205,90</span>
                  </h6>

                  <div className={styles.virtualPrice}>
                    <h3 className={styles.currentPrice}>R$ 184,00</h3>
                    <h5 className={styles.oldPrice}>R$ 194,00</h5>
                  </div>
                </div>
              </div>

              <div className={styles.cartActions}>
                Quantidade

                <div className={styles.row}>
                  <MinusAndPlusButtons
                    style={{
                      width: '30%',
                      margin: '15px 0',
                      alignItems: 'center',
                      fontSize: '16px'
                    }}
                    buttonsStyle={{
                      width: '28px',
                      height: '28px'
                    }}
                  />

                  <div className={styles.subtotal}>
                    Subtotal R$ 184,00
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.button}
                >
                  Adicionar à Sacola de Compras
                </button>
              </div>
            </div>

            <DetailDots style={{ left: '104%', bottom: '-20px' }} />
          </div>
        </section>

        <section className={mainStyles.contentSection}>
          <div
            className={`${styles.mainContainer} ${styles.columnFlex} ${styles.specialSection}`}
          >
            <DetailDots style={{ right: '93%', bottom: '-40px' }} />
            <h2 className={mainStyles.titleSection} style={{ margin: '0' }}>
              Saiba mais
            </h2>

            <article className={styles.specialArticle}>
              <img
                src="/images/products/specification.jpg"
                alt="Especificações das Meias"
                className={styles.highlightImage}
              />

              <h4 className={styles.specialSubtitle}>
                Conforto e Tecnologia para o Dia a Dia
              </h4>

              <p className={styles.paragraph}>
                A Meia SIGVARIS 20-30 SELECT COMFORT é revestidas internamente com uma microfibra especial, que transfere a umidade da pele (suor) para o meio externo, oferecendo uma agradável sensação CLIMÁTICA, além de tornar o produto mais sedoso, confortável e mais fácil de calçar.
              </p>

              <iframe
                src="https://www.youtube.com/embed/Yuo59BxbwFk"
                className={styles.iframe}
              ></iframe>

              <p className={styles.paragraph}>
                A linha Select Comfort possui versões na Meia 3/4, Meia 7/8 e Meia Calça todas elas com a qualidade e Compressão Sigvaris Garantida. É a melhor meia da linha, possui 06 meses de Garantia de compressão e é a mais indicada para tratamentos diversos como: Pós Escleroterapia, Trombose, Varizes, Sensação de peso na pernas e também para Gestantes e Viagens de Longa Duração.
              </p>

              <h4 className={styles.specialSubtitle}>
                Tabela de Especificações
              </h4>

              <Table>
                <tbody>
                  {product.principalFeatures.map(feature => (
                    <tr key={feature.title}>
                      <th>{feature.title}</th>
                      <td>{feature.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <h4 className={styles.specialSubtitle}>
                Por que comprar a Sigvaris Select Comfort ?
              </h4>

              <ul className={styles.specialList}>
                <li className={styles.specialListItem}>
                Melhor Custo x Beneficio
                </li>
                <li className={styles.specialListItem}>
                Possui Tecnologia de Ponta
                </li>
                <li className={styles.specialListItem}>
                Excelente Conforto Climático
                </li>
                <li className={styles.specialListItem}>
                Características
                </li>
                <li className={styles.specialListItem}>
                Compressão 20-30 mmHg
                </li>
                <li className={styles.specialListItem}>
                Versão 3/4 Panturrilha
                </li>
                <li className={styles.specialListItem}>
                Estilo Casual Dia a Dia
                </li>
                <li className={styles.specialListItem}>
                Efeito Climático  -  SIM
                </li>
              </ul>

              <h4 className={styles.specialSubtitle}>
                Como Vestir
              </h4>

              <iframe
                src="https://www.youtube.com/embed/g6Lrlpyk4RI"
                className={styles.iframe}
              ></iframe>
            </article>
          </div>
        </section>

        <section className={mainStyles.contentSection}>
          <div className={`${styles.mainContainer} ${styles.columnFlex}`}>
            <h2 className={mainStyles.titleSection}>
              Características Principais
            </h2>

            <Table>
              <tbody>
                {product.principalFeatures.map(feature => (
                  <tr key={feature.title}>
                    <th>{feature.title}</th>
                    <td>{feature.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>

        <section className={mainStyles.contentSection}>
          <div className={`${styles.mainContainer} ${styles.columnFlex}`}>
            <h2 className={mainStyles.titleSection}>
              Descrição
            </h2>

            <div className={styles.description}>
              {product.description}
            </div>
          </div>
        </section>

        <section className={mainStyles.contentSection}>
          <div className={`${styles.mainContainer} ${styles.columnFlex}`}>
            <h2 className={mainStyles.titleSection}>
              Perguntas e Respostas
            </h2>

            <div className={styles.row}>
              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <div className={styles.fieldGroup}>
                  <input
                    type="text"
                    placeholder="Digite sua pergunta aqui..."
                    className={styles.input}
                    name="name"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                  />
                </div>

                <div className={styles.buttonContainer}>
                  <button
                    className={styles.button}
                    style={{ margin: '0' }}
                  >
                    Perguntar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className={grid.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Product
