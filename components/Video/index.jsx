import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Video () {
  return (
    <>
      <div className={styles.playButtonContainer}>
        <button
          type="button"
          className={styles.playButton}
        >
          <FontAwesomeIcon icon="play-circle" />
        </button>
      </div>

      <div className={styles.videoContainer}>
        <img
          src="/images/video-display.jpg"
          alt="Video-Display"
          className={styles.video}
        />
      </div>
    </>
  )
}

export default Video
