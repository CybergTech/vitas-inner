import React from 'react'

import Logo from '../../Logo'

import styles from './styles.module.css'

function Links () {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h4 className={styles.title}>SOBRE</h4>
          <ul className={styles.list}>
            <li><a href="#!">Contato</a></li>
            <li><a href="#!">Sobre a ecovitas</a></li>
            <li><a href="#!">Política de Privacidade</a></li>
            <li><a href="#!">Termos & Condições</a></li>
            <li><a href="#!">Termos de Garantia</a></li>
            <li><a href="#!">Suporte Técnico</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>DESCUBRA</h4>
          <ul className={styles.list}>
            <li><a href="#!">Blog</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>SUPORTE</h4>
          <ul className={styles.list}>
            <li className={styles.addressItem}>
              <a href="mailto:vendas@vitas.com.br">
                vendas@vitas.com.br
              </a>
            </li>

            <li className={styles.addressItem}>
              <a href="mailto:sac@vitas.com.br">
                sac@vitas.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.logo}>
        <Logo dark />
      </div>
    </div>
  )
}

export default Links
