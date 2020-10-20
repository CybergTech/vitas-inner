/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import Header from '../components/HomeHeader'
import Video from '../components/Video'
import Footer from '../components/HomeFooter'

import grid from '../styles/grid/home.module.css'
import styles from '../styles/Home.module.css'

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Ecovitas Marketplace</title>
      </Head>

      <header className={grid.header}>
        <Header />
      </header>

      <div className={grid.video}>
        <Video />
      </div>

      <main className={grid.main}>
        <hr className={styles.divisionLine} />

        <section className={styles.section}>
          <div className={styles.about}>
            <div>O<span>ecossistema</span></div>
            <p>ideal para seu negócio vender muito mais</p>
          </div>

          <div className={styles.allProjects}>
            <ul className={styles.allProjectsList}>
              <li>
                <button>
                  <a
                    href="https://vitas.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>
                      Vita&apos;s
                    </h3>
                    <h5>
                      vitas.com.br
                    </h5>
                  </a>
                </button>
              </li>

              <li>
                <button>
                  <a
                    href="https://empresas.vitas.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>
                      Vita&apos;s b2b
                    </h3>
                    <h5>
                      empresas.vitas.com.br
                    </h5>
                  </a>
                </button>
              </li>

              <li>
                <button>
                  <a
                    href="https://bonini.com.br"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3>
                      Bonini
                    </h3>
                    <h5>
                      bonini.com.br
                    </h5>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.advantages}`}>
          <hr className={styles.divisionLine} />

          <img
            src="/images/advantages.png"
            alt="Vantages-Ecovitas"
            className={styles.advantagesImage}
          />

          <ul className={styles.advantagesList}>
            <li>
              <h3>
                Custo Zero
              </h3>
              <p>
                Não é preciso pagar nenhum valor para vender pela plataforma, basta entrar e se cadastrar :D
              </p>
            </li>

            <li>
              <h3>
                Visibilidade Garantida
              </h3>
              <p>
                Esteja presente em plataformas reconhecidamente relevantes no comércio de materiais médicos pela internet
              </p>
            </li>

            <li>
              <h3>
                Menor taxa de comissão
              </h3>
              <p>
                Temos a taxa de comissão mais justa do mercado, ou seja, a menor*
              </p>
            </li>

            <li>
              <h3>
                Pagamento Integral
              </h3>
              <p>
                Receba os pagamentos de maneira integral, independente do método de pagamento escolhido pelo cliente
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer className={grid.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
