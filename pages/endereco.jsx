/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/Header'
import DetailDots from '../components/DetailDots'
import Cart from '../components/Cart'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

import grid from '../styles/grid/clean.module.css'
import styles from '../styles/basket.module.css'

function Address () {
  const [session, loading] = useSession()

  const [checked, setChecked] = useState(false)

  const [modal, setModal] = useState('')

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

  function handleHideModal () {
    setModal('')
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    setModal(
      <Modal handleHideModal={handleHideModal}>
        <header>
          <span
            className={styles.modalClose}
            onClick={() => handleHideModal()}
          >
            <FontAwesomeIcon icon="times" />
          </span>
          <h3 className={styles.modalTitle}>Você confirma essa informação?</h3>
        </header>

        <main className={styles.modalMain}>
          <h5 className={styles.modalSubtitle}>Você irá retirar a compra em:</h5>
          <button type="button" className={styles.formItem}>
            <div className={`${styles.formItemSelected} ${styles.isSelected}`}>
              <FontAwesomeIcon icon="warehouse" className={styles.selectedIcon} />
            </div>

            <div className={styles.formItemContent}>
              <h5 className={styles.text}>
                <span className={styles.contentTitle}>Loja Vita&apos;s Centro</span>
                Lourenço Pinto, 47<br/>
                Centro - Curitiba, Paraná - CEP 12309-984
              </h5>
            </div>
          </button>
        </main>

        <footer className={styles.modalFooter}>
          <p className={styles.modalPS}>* Quando for buscar sua compra, não se esqueça de levar o comprovante da mesma que será gerado ao realizar o pagamento.</p>

          <div className={styles.modalButtons}>
            <button
              className={styles.modalCancelButton}
              onClick={() => handleHideModal()}
            >
              Cancelar
            </button>
            <button
              className={styles.modalConfirmButton}
              onClick={() => Router.push('/pagamento')}
            >
              Continuar
            </button>
          </div>
        </footer>
      </Modal>
    )
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Endereço - Sacola - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header id={true} address={false}></Header>
      </header>

      <main className={grid.main}>
        <div className={styles.container}>
          <div className={styles.focusedArea}>
            <DetailDots style={{ right: '90%', bottom: '-30px' }} />

            <div className={styles.wrapper}>
              <h2 className={styles.title}>
                Ok, agora você precisa escolher como vai<br />querer receber sua compra
              </h2>

              <form
                className={styles.form}
                onSubmit={e => handleFormSubmit(e)}
              >
                <h4 className={styles.subtitle}>Endereço</h4>

                <div className={styles.group}>
                  <input
                    type="radio"
                    value="1"
                    id="delivery"
                    checked={checked}
                    onChange={e => setChecked(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setChecked(!checked)}
                    className={styles.formItem}
                  >
                    <div
                      className={`${styles.formItemSelected} ${checked && styles.isSelected}`}
                    >
                      {checked &&
                        <FontAwesomeIcon
                          icon="check-circle"
                          className={styles.selectedIcon}
                        />
                      }
                    </div>

                    <div className={styles.formItemContent}>
                      <h5 className={styles.text}>
                        <span className={styles.contentTitle}>Minha Casa</span>
                        Marechal Deodoro da Fonseca, 94<br/>
                        Loja - Curitiba, Paraná - CEP 12345-874
                      </h5>
                    </div>
                  </button>
                </div>

                <div className={styles.group}>
                  <input type="radio" value="1" id="delivery" />

                  <button type="button" className={styles.formItem}>
                    <div className={styles.formItemSelected}></div>

                    <div className={styles.formItemContent}>
                      <h5 className={styles.text}>
                        <span className={styles.contentTitle}>Vó Tereza</span>
                        Pompeu Lemonin, 187<br/>
                        Centro - Curitiba, Paraná - CEP 12309-984
                      </h5>
                    </div>
                  </button>
                </div>

                <div className={styles.group}>
                  <input type="radio" value="1" id="delivery" />

                  <button type="button" className={styles.formItem}>
                    <div className={styles.formItemSelected}></div>

                    <div className={styles.formItemContent}>
                      <h5 className={styles.text}>
                        <span className={styles.contentTitle}>Vó Tereza</span>
                        Pompeu Lemonin, 187<br/>
                        Centro - Curitiba, Paraná - CEP 12309-984
                      </h5>
                    </div>
                  </button>
                </div>

                <div className={styles.links}>
                  <Link href="/">
                    <a className={styles.link}>
                      Adicionar endereço <FontAwesomeIcon icon="chevron-right" className={styles.icon} />
                    </a>
                  </Link>

                  <button
                    type="submit"
                    className={styles.button}
                  >
                    Confirmar escolha
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Cart />
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>

      {loading && <Loading />}
      {modal}
    </div>
  )
}

export default Address
