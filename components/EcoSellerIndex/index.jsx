import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Wrapper from '../Wrapper'

import styles from './styles.module.css'

function EcoSellerIndex () {
  const title = <>Índice <span>eco</span>seller</>

  return (
    <Wrapper title={title}>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.listItem} bronze="true">
            <h4>1</h4>
            <h5>
              Bronze
              <FontAwesomeIcon icon="medal" className={styles.icon} />
            </h5>
          </li>

          <li className={styles.listItem} silver="true">
            <h4>2</h4>
            <h5>
              Prata
              <FontAwesomeIcon icon="medal" className={styles.icon} />
            </h5>
          </li>

          <li className={styles.listItem} gold="true">
            <h4>3</h4>
            <h5>
              Ouro
              <FontAwesomeIcon icon="medal" className={styles.icon} />
            </h5>
          </li>

          <li className={styles.listItem} active="true" turquoise="true">
            <h4>4</h4>
            <h5>
              Turquesa
              <FontAwesomeIcon icon="medal" className={styles.icon} />
            </h5>
          </li>

          <li className={styles.listItem} emerald="true">
            <h4>5</h4>
            <h5>
              Esmeralda
              <FontAwesomeIcon icon="medal" className={styles.icon} />
            </h5>
          </li>
        </ul>

        <div className={styles.data}>
          <div className={styles.dataItem}>
            <h3>4,26%</h3>
            <h4>Pedidos Atrasados</h4>
          </div>

          <div className={styles.dataItem}>
            <h3>4,26%</h3>
            <h4>Pedidos Atrasados</h4>
          </div>

          <div className={styles.dataItem}>
            <h3>4,26%</h3>
            <h4>Pedidos Atrasados</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default EcoSellerIndex
