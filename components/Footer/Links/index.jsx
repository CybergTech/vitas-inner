import React from 'react'

import company from '../../../services/companyInfo'

import styles from './styles.module.css'

function Links () {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h4 className={styles.title}>INFORMAÇÕES</h4>
        <ul className={styles.list}>
          <li><a href="#!">Contato</a></li>
          <li><a href="#!">Sobre a Vita&apos;s</a></li>
          <li><a href="#!">Política de Privacidade</a></li>
          <li><a href="#!">Termos & Condições</a></li>
          <li><a href="#!">Termos de Garantia</a></li>
          <li><a href="#!">Suporte Técnico</a></li>
          <li><a href="#!">Métodos de Pagamento</a></li>
          <li><a href="#!">Trabalhe Conosco</a></li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4 className={styles.title}>MINHA CONTA</h4>
        <ul className={styles.list}>
          <li><a href="#!">Meu Perfil</a></li>
          <li><a href="#!">Histórico de Compras</a></li>
          <li><a href="#!">Lista de Desejos</a></li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4 className={styles.title}>NOSSAS LOJAS</h4>
        <ul className={styles.list}>
          <li className={styles.addressItem}>
            <span>
              {company.modules.locations[0].address}
            </span>
            <span>
              {company.modules.locations[0].phoneNumber}
            </span>
          </li>

          <li className={styles.addressItem}>
            <span>
              {company.modules.locations[1].address}
            </span>
            <span>
              {company.modules.locations[1].phoneNumber}
            </span>
          </li>

          <li className={styles.addressItem}>
            <span>
              {company.modules.locations[2].address}
            </span>
            <span>
              {company.modules.locations[2].phoneNumber}
            </span>
          </li>
        </ul>

        <h4 className={styles.title}>EMAILS COMERCIAIS</h4>
        <ul className={styles.list}>
          <li className={styles.addressItem}>vendas@vitas.com.br</li>
          <li className={styles.addressItem}>sac@vitas.com.br</li>
        </ul>
      </div>
    </div>
  )
}

export default Links
