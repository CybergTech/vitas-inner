import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import companyInfo from '../../services/companyInfo'

import styles from './styles.module.css'

function WhatsAppButton () {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href={`https://wa.me/${companyInfo.modules.phoneNumber.raw}`}
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.background}>
          <FontAwesomeIcon icon={['fab', 'whatsapp']} className={styles.icon} />
        </div>

        <div className={styles.popUp}>
          <h3>Contate-nos pelo WhatsApp.</h3>
        </div>
      </a>
    </div>
  )
}

export default WhatsAppButton
