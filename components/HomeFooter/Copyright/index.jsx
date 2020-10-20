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
      <LineDivision style={lineStyle} />

      <div className={styles.row}>
        <span>Todos os Direitos Reservados - Copyright 2020 - ecovitas marketplace</span>
        <span>CNPJ: 02.385.819/0001-40</span>
      </div>
    </div>
  )
}

export default Copyright
