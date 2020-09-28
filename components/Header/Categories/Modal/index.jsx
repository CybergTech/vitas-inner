/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import SlideToggle from 'react-slide-toggle'

import styles from './styles.module.css'

function Modal ({ showModal, bigger }) {
  return (
    <>
      <div
        className={`
          ${styles.container}
          ${bigger ? styles.bigger : ''}
          ${showModal ? styles.show : styles.hide}
        `}
      >
        <div className={styles.categories}>
          <ul className={styles.list}>
            <SlideToggle collapsed>
              {({ toggle, setCollapsibleElement }) => (
                <li
                  className={styles.listItem}
                  onMouseEnter={toggle}
                  onMouseLeave={toggle}
                >
                  <Link href="#!">
                    <a>
                      APARELHOS MÉDICOS
                    </a>
                  </Link>

                  <ul
                    className={`${styles.list} ${styles.secondRoot}`}
                    ref={setCollapsibleElement}
                  >
                    <SlideToggle collapsed>
                      {({ toggle, setCollapsibleElement }) => (
                        <li
                          className={styles.listItem}
                          onMouseEnter={toggle}
                          onMouseLeave={toggle}
                        >
                          <Link href="#!">
                            <a onClick={toggle}>
                              ACESSÓRIOS PARA DIABÉTICOS
                            </a>
                          </Link>

                          <ul
                            className={`${styles.list} ${styles.thirdRoot}`}
                            ref={setCollapsibleElement}
                          >
                            <li className={styles.listItem}>
                              <Link href="#!">
                                <a>
                                  AGULHA PARA CANETA DE INSULINA
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      )}
                    </SlideToggle>

                    <li className={styles.listItem}>
                      <Link href="#!">
                        <a>
                          APARELHOS DE PRESSÃO
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </SlideToggle>

            <li className={styles.listItem}>
              <Link href="#!">
                <a>
                  CONFORTO E BEM ESTAR
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="#!">
                <a>
                  MATERIAL PARA RESGATE
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="#!">
                <a>
                  MEIAS DE COMPRESSÃO
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="#!">
                <a>
                  ORTOPEDIA E REABILITAÇÃO
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.specialProduct}>
          <Link href="#!">
            <a>
              <img src="/images/banners/categories.svg" alt="termometro-clinico-digital" />
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Modal
