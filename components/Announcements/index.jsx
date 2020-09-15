import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styles from './styles.module.css'

function Announcements () {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon="cash-register" />
        </div>

        <div className={styles.subtitles}>
          <h4 className={styles.title}>
            PAGAMENTOS FLEXÍVEIS
          </h4>
          <h5 className={styles.subtitle}>
            Possuímos várias formas de pagamento
          </h5>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon="truck" />
        </div>

        <div className={styles.subtitles}>
          <h4 className={styles.title}>
            DELIVERY EM TODO O BRASIL
          </h4>
          <h5 className={styles.subtitle}>
            Realizamos a entrega para qualquer lugar do país
          </h5>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon="shield-alt" />
        </div>

        <div className={styles.subtitles}>
          <h4 className={styles.title}>
            SEGURANÇA E PRIVACIDADE
          </h4>
          <h5 className={styles.subtitle}>
            Garantimos o sigilo e a proteção dos seus dados
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Announcements
