/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  APARELHOS MÉDICOS <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  CONFORTO E BEM ESTAR <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  MATERIAL PARA RESGATE <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  MEIAS DE COMPRESSÃO <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>

            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  ORTOPEDIA E REABILITAÇÃO <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  DESCARTÁVEIS <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  ACESSIBILIDADE E LOCOMOÇÃO <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/categoria/meias-de-compressao">
                <a>
                  CIRÚRGICO INSTRUMENTAL <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
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
