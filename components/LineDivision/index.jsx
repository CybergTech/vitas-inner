/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function LineDivision ({ style }) {
  return <hr style={style} className={styles.divisionLine} />
}

export default LineDivision
