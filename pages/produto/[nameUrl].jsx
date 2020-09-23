/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'

import { getProductByNameUrl } from '../../lib/product/getProductByNameUrl'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Path from '../../components/Path'
import DetailDots from '../../components/DetailDots'
import MinusAndPlusButtons from '../../components/ProductItem/MinusAndPlusButtons'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/nobanners.module.css'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/Product.module.css'

export async function getStaticPaths () {
  const paths = [{ params: { nameUrl: 'alicate-de-corte-espicula' } }]
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const product = await getProductByNameUrl(params.nameUrl)
  return {
    props: {
      product
    }
  }
}

function Product ({ product }) {
  const allImages = product.data.photos
  const [currentImage, setCurrentImage] = useState(product.data.photos[0])
  const [isHoveringShareIcon, setIsHoveringShareIcon] = useState(false)

  const paths = [
    {
      name: 'Home',
      href: '/'
    },
    ...product.data.categories,
    {
      name: product.data.name,
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
        <title>{product.data.name} - Vita&apos;s Materiais Médicos e Hospitalares</title>
        <meta name="description" content={product.data.description} />
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <main className={grid.main}>
        <Path paths={paths} />

        <div className={mainStyles.contentSection}>
          <DetailDots style={{ right: '96.5%', top: '130px' }} />
          <div className={styles.container}>
            <div className={styles.picturesContainer}>
              <ul className={styles.list}>
                {allImages.map((image, index) => (
                  <li
                    key={image.index}
                    className={`${styles.item} imagesListItem ${index === 0 && styles.active}`}
                    onClick={() => goToItem(image.index)}
                  >
                    <img
                      src={`/images/products/${image.src}`}
                      alt={image.title}
                      title={image.title}
                    />
                  </li>
                ))}
              </ul>

              <div className={styles.imagesView}>
                <div className={styles.imagesWrapper} style={{
                  transform: `translateX(
                    -${currentImage.index * 100}%
                  )`
                }}>
                  {
                    allImages.map((image, index) => (
                      <img
                        key={index}
                        src={`/images/products/${image.src}`}
                        alt={image.title}
                        title={image.title}
                      />
                    ))
                  }
                </div>
              </div>
            </div>

            <div className={styles.infoContainer}>
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
                        href={`https://twitter.com/intent/tweet?text=${product.data.name}&url=https://vitas.com.br/produto/${product.nameUrl}&via=vitas`}
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
                        href={`https://web.whatsapp.com/send?text=${product.data.name} https://vitas.com.br/produto/${product.nameUrl}`}
                        title="Compartilhar com o WhatsApp Web"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                      </a>
                    </div>
                    <div className={`${styles.shareItem}`}>
                      <a
                        href={`https://web.whatsapp.com/send?text=${product.data.name} https://vitas.com.br/produto/${product.nameUrl}`}
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
                  {product.data.categories.map((category, index) => (
                    <li key={index} className={styles.category}>
                      {category.name} {product.data.categories[index + 1] && <span className={styles.separation}>•</span>}
                    </li>
                  ))}
                  {/* Podologia&nbsp;&nbsp;•&nbsp;&nbsp;Alicates de Corte Espicula */}
                </ul>
                <h2 className={styles.name}>
                  {product.data.name}
                </h2>

                <div className={styles.price}>
                  <h6 className={styles.storePrice}>
                    Na loja física <span className={styles.lineThrough}>R$ 77,90</span>
                  </h6>

                  <div className={styles.virtualPrice}>
                    <h3 className={styles.currentPrice}>R$ 69,90</h3>
                    <h5 className={styles.oldPrice}>R$ 71,20</h5>
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
                    Subtotal R$ 138,00
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
          </div>
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Product