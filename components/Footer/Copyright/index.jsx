import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../../Logo'
import LineDivision from '../../LineDivision'

import styles from './styles.module.css'

const lineStyle = {
  height: '0',
  marginTop: '30px',
  marginBottom: '25px'
}

function Copyright () {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <ul className={styles.paymentMethods}>
          <li className={styles.paymentItem}>
            <FontAwesomeIcon icon={['fab', 'cc-visa']} />
          </li>
          <li className={styles.paymentItem}>
            <FontAwesomeIcon icon={['fab', 'cc-jcb']} />
          </li>
          <li className={styles.paymentItem}>
            <FontAwesomeIcon icon={['fab', 'cc-mastercard']} />
          </li>
          <li className={styles.paymentItem}>
            <FontAwesomeIcon icon={['fab', 'cc-paypal']} />
          </li>
          <li className={styles.paymentItem}>
            <FontAwesomeIcon icon={['fab', 'cc-diners-club']} />
          </li>
          <li className={styles.paymentItem}>
            <img src="/images/boleto.svg" alt="Boleto" className={styles.image} />
          </li>
          <li className={styles.paymentItem}>
            <img src="/images/google-safe.svg" alt="Site 100% Seguro" className={styles.image} />
          </li>
        </ul>

        <div className={styles.logo}>
          <Logo />
        </div>
      </div>

      <LineDivision style={lineStyle} />

      <div className={styles.row}>
        <span>Todos os Direitos Reservados - Copyright 2020 - Vita&apos;s Materiais Médicos</span>
        <span>CNPJ: 02.385.819/0001-40</span>
      </div>
    </div>
  )
}

export default Copyright
