/* eslint-disable react/prop-types */
import React from 'react'

import styles from './styles.module.css'

function LineDivision (props) {
  return <hr style={props.style} className={styles.divisionLine} />
}

export default LineDivision
