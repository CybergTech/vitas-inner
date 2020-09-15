import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import company from '../../services/companyInfo'

import styles from './styles.module.css'

function TopHeader () {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.infoItem}>
          <FontAwesomeIcon icon="phone-alt" className={styles.icon} />
          <span className={styles.infoText}>{company.modules.phoneNumber.formatted}</span>
        </div>

        <div className={styles.infoItem}>
          <FontAwesomeIcon icon="envelope" className={`${styles.icon} ${styles.icon2x}`} />
          <span className={styles.infoText}>{company.modules.mail}</span>
        </div>

        <div className={styles.infoItem}>
          <FontAwesomeIcon icon="map-marker-alt" className={styles.icon} />
          <span className={styles.infoText}>{company.modules.location}</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.socialMediaItem}>
          <a href="">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} className={styles.mediaIcon} />
          </a>
        </div>
        <div className={styles.socialMediaItem}>
          <a href="">
            <FontAwesomeIcon icon={['fab', 'telegram-plane']} className={styles.mediaIcon} />
          </a>
        </div>
        <div className={styles.socialMediaItem}>
          <a href="">
            <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.mediaIcon} />
          </a>
        </div>
        <div className={styles.socialMediaItem}>
          <a href="">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.mediaIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
