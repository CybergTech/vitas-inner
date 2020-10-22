import React from 'react'

import Wrapper from '../Wrapper'

import styles from './styles.module.css'

function ProductsBrief () {
  return (
    <Wrapper title="Resumo de produtos">
      <div className={styles.container}>
        <div className={styles.item}>
          <h4>94</h4>
          <h5>Cadastrados</h5>
        </div>

        <div className={styles.item}>
          <h4>94</h4>
          <h5>Cadastrados</h5>
        </div>

        <div className={`${styles.item} ${styles.red}`}>
          <h4>94</h4>
          <h5>Cadastrados</h5>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductsBrief
