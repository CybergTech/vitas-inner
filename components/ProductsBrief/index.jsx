/* eslint-disable react/prop-types */
import React from 'react'

import Wrapper from '../Wrapper'

import styles from './styles.module.css'

function MainProductsBriefData () {
  return (
    <>
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
    </>
  )
}

function ProductsBrief ({ completeVersion }) {
  return (
    <Wrapper title="Resumo de produtos">
      <div className={styles.container}>
        {!completeVersion
          ? <MainProductsBriefData />
          : <div className={styles.row}>
            <div className={`${styles.flexColumn} ${styles.biggerColumn}`}>
              <div className={styles.row}>
                <MainProductsBriefData />
              </div>

              <div className={`${styles.row} ${styles.biggerRow}`}>
                <div
                  className={`${styles.item} ${styles.gray} ${styles.biggerItem}`}
                >
                  <h4>Etapa 1</h4>
                  <p>Campos e atributos obrigatórios pendentes</p>
                  <h5>5</h5>
                </div>
                <div
                  className={`${styles.item} ${styles.gray} ${styles.biggerItem}`}
                >
                  <h4>Etapa 2</h4>
                  <p>Trava de preço</p>
                  <h5>1</h5>
                </div>
                <div
                  className={`${styles.item} ${styles.gray} ${styles.biggerItem}`}
                >
                  <h4>Etapa 3</h4>
                  <p>Enviando ao marketplace</p>
                  <h5>1</h5>
                </div>
              </div>

              <img
                src="/images/icons/big-arrow.svg"
                alt="Big-Arrow-Detail"
                className={styles.bigArrow}
              />
            </div>

            <div className={`${styles.flexColumn} ${styles.littleColumn}`}>
              <div
                className={`${styles.item} ${styles.gray} ${styles.biggerItemRow}`}
              >
                <span>3</span> sem estoque
              </div>
              <div
                className={`${styles.item} ${styles.gray} ${styles.biggerItemRow}`}
              >
                <span>7</span> produtos exclusivos
              </div>
              <div
                className={`${styles.item} ${styles.gray} ${styles.biggerItemRow} ${styles.biggerItemHeight}`}
              >
                <div className={styles.flexColumn}>
                  <p>Presença em <span>2</span> marketplaces</p>
                  <div className={styles.row}>
                    <h4>Vita&apos;s</h4>
                    <h4>Vita&apos;s Empresas</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </Wrapper>
  )
}

export default ProductsBrief
