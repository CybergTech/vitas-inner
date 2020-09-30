/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Path from '../../components/Path'
import ProductItem from '../../components/ProductItem'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/nobanners.module.css'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/Category.module.css'

const paths = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Meias de Compressão',
    href: '/categoria/meias-de-compressao'
  }
]

function Category () {
  const [showList, setShowList] = useState(true)
  const [showBack, setShowBack] = useState(false)
  const [timeoutShowBack, setTimeoutShowBack] = useState('')

  function handleShowBack (show = true, withDelay = true) {
    if (timeoutShowBack) clearTimeout(timeoutShowBack)

    if (withDelay) {
      setTimeoutShowBack(setTimeout(() => {
        setShowBack(show)
      }, 500))
    } else {
      setShowBack(show)
    }
  }

  function handleToggleList () {
    setShowList(!showList)
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Meias de Compressão - Vita&apos;s Materiais Médicos e Hospitalares</title>
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
          <div className={styles.categoryInfo}>
            <h2 className={styles.categoryName}>Meias de Compressão</h2>
            <h4 className={styles.categoryDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </h4>
          </div>

          <div className={styles.specialArea}>
            <h4 className={mainStyles.titleSection}>SAIBA QUAL MEIA ESCOLHER</h4>

            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            <button className={styles.button}>Ver mais</button>
          </div>

          <div className={mainStyles.sectionFlex}>
            <div
              className={`${styles.background} ${showBack ? styles.show : styles.hide}`}
              onClick={() => handleShowBack(false, false)}
            ></div>

            <div
              className={`${styles.categories}  ${showBack && styles.zIndex} ${!showList ? styles.noList : ''}`}
            >
              {showList &&
                <div
                  className={styles.categoriesList}
                  onMouseEnter={() => handleShowBack()}
                  onMouseLeave={() => handleShowBack(false)}
                >
                  <h2 className={`${mainStyles.titleSection} ${mainStyles.mgB2}`}>SUBCATEGORIAS</h2>

                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      <Link href="#!">
                        <a>
                          Acessórios <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                        </a>
                      </Link>
                    </li>

                    <li className={styles.listItem}>
                      <Link href="#!">
                        <a>
                        Feminino <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                        </a>
                      </Link>

                      <ul className={styles.list}>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Alta Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>

                          <ul className={styles.list}>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Materna <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Calça <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Coxa 7/8 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Panturrilha 3/4 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Materna <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Calça <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Coxa 7/8 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Panturrilha 3/4 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Média Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Suave Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Esporte <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Viagem <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className={styles.listItem}>
                      <Link href="#!">
                        <a>
                        Masculino <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                        </a>
                      </Link>

                      <ul className={styles.list}>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Alta Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>

                          <ul className={styles.list}>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Materna <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Calça <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Coxa 7/8 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Panturrilha 3/4 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Materna <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Calça <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Meia Coxa 7/8 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                Panturrilha 3/4 <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Média Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Suave Compressão <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Esporte <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                        <li className={styles.listItem}>
                          <Link href="#!">
                            <a>
                            Viagem <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              }

              <button
                className={styles.categoriesToggleButton}
                onClick={() => handleToggleList()}
              >
                <FontAwesomeIcon
                  icon="angle-double-left"
                  style={{
                    transform: `rotate(${!showList ? '180deg' : '0'})`
                  }}
                />
              </button>
            </div>

            <div className={mainStyles.productList}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </section>
      </main>

      <footer className={grid.footer}>
        <Footer maps={false} />
      </footer>
    </div>
  )
}

export default Category
