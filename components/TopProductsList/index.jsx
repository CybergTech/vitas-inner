import React from 'react'

import Wrapper from '../Wrapper'

import styles from './styles.module.css'

function TopProductsList () {
  return (
    <Wrapper title="Produtos em alta">
      <table className={styles.table}>
        <thead>
          <tr>
            <th><hr /></th>
            <th>Vendidos</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th><span>1</span> Máscara Descartável Tripla Branca PortDesc</th>
            <th>12</th>
          </tr>
          <tr>
            <th><span>2</span> Máscara Descartável Tripla Branca PortDesc</th>
            <th>12</th>
          </tr>
          <tr>
            <th><span>3</span> Máscara Descartável Tripla Branca PortDesc</th>
            <th>12</th>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default TopProductsList
