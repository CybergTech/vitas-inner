/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SlideToggle from 'react-slide-toggle'

import Header from '../components/Header'
import DetailDots from '../components/DetailDots'
import CreditCardItem from '../components/CreditCardItem'
import Footer from '../components/Footer'
import Loading from '../components/Loading'

import grid from '../styles/grid/clean.module.css'
import styles from '../styles/basket.module.css'

function Checkout () {
  const [session, loading] = useSession()

  const [showItems, setShowItems] = useState(true)

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Checkout - Sacola - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header id={true} address={true} payment={true} checkout={true}></Header>
      </header>

      <main className={grid.main}>
        <div className={`${styles.container} ${styles.checkout}`}>
          <div className={styles.focusedArea}>
            <DetailDots style={{ right: '90%', bottom: '-30px' }} />

            <div className={styles.wrapper}>
              <h2 className={styles.title}>
                O seu pagamento foi aprovado com sucesso!
              </h2>

              <h4 className={styles.subtitle}>
                <FontAwesomeIcon icon="envelope" className={styles.icon} />
                Enviamos uma confirmação de compra para o seu email
              </h4>

              <div className={styles.shippingDetails}>
                <h5 className={styles.subtitle}>Detalhes da compra</h5>

                <ul className={styles.shippingDetailsList}>
                  <li className={styles.shippingDetailsListItem}>
                    <span>Identificação da Compra:</span> 9873223434-EEJOV
                  </li>

                  <li className={styles.shippingDetailsListItem}>
                    <SlideToggle
                      onCollapsing={() => setShowItems(!showItems)}
                      onExpanding={() => setShowItems(!showItems)}
                    >
                      {({ toggle, setCollapsibleElement }) => (
                        <>
                          <span
                            className={styles.pointer}
                            onClick={toggle}
                          >
                            Itens <FontAwesomeIcon
                              icon="chevron-down"
                              className={styles.icon}
                              style={{
                                transform: `rotate(${showItems ? '0' : '180deg'})`
                              }}
                            />
                          </span>

                          <ul
                            className={styles.shippingDetailsList}
                            ref={setCollapsibleElement}
                          >
                            <li className={styles.shippingDetailsListItem}>
                              - Joelheira Esporte com Orifício Reforçado Mercur
                            </li>
                            <li className={styles.shippingDetailsListItem}>
                              - Tornozeleira Elástica Bamboo Par Hidrolight
                            </li>
                          </ul>
                        </>
                      )}
                    </SlideToggle>
                  </li>

                  <li className={styles.shippingDetailsListItem}>
                    <span>Forma de Pagamento:</span> Cartão de Crédito

                    <div className={styles.chosenMethod}>
                      <CreditCardItem
                        card={{
                          number: 'XXXX 2345',
                          flag: 'visa.png'
                        }}
                        withoutCheck
                      />
                    </div>
                  </li>

                  <li className={styles.shippingDetailsListItem}>
                    <span>Total pago:</span> R$ 123,87
                  </li>

                  <li className={styles.shippingDetailsListItem}>
                    <span>Endereço de Retirada:</span>
                    <div className={styles.chosenAddress}>
                      <FontAwesomeIcon icon="warehouse" className={styles.icon} />
                      <p className={styles.address}>
                        <span>Loja Vita&apos;s Centro</span><br />
                        Lourenço Pinto, 47<br />
                        Loja - Curitiba, Paraná - CEP 80010160
                      </p>
                    </div>
                  </li>
                </ul>

              </div>

              <div className={styles.links}>
                <button
                  type="submit"
                  className={styles.button}
                >
                  Gerar PDF do comprovante
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>

      {loading ? <Loading /> : ''}
    </div>
  )
}

export default Checkout
