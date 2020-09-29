/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'

import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Path from '../../components/Path'
import DetailDots from '../../components/DetailDots'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/nobanners.module.css'
import mainStyles from '../../styles/main.module.css'
import styles from '../../styles/article.module.css'

const paths = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Quem Somos',
    href: '/sobre/quem-somos'
  }
]

function Home () {
  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Quem Somos - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <div className={grid.topHeader}>
        <TopHeader />
      </div>

      <header className={grid.header}>
        <Header></Header>
      </header>

      <main className={`${grid.main}`}>
        <Path paths={paths} />

        <article className={`${styles.container} ${mainStyles.contentSection}`}>
          <DetailDots style={{ right: '95%', top: '83px' }} />
          <DetailDots style={{ left: '95%', bottom: '0' }} />
          <h3 className={styles.title}>
            QUEM SOMOS
          </h3>

          <p className={styles.paragraph}>
            Em 1927, Pedro Luís Lappalu Deffés adquire o imóvel da Rua Lourenço Pinto em Curitiba e abre a Casa Lappalu Médico Hospitalar, local que se tornou ponto de referência em materiais médicos. No final do ano 1987, a Vita&apos;s Comércio de Materiais Odontomédicos Hospitalares Ltda, compra a Casa Lappalu e dá um novo impulso aos negócios da já tradicional empresa.
          </p>

          <p className={styles.paragraph}>
            No mesmo endereço, a Vita&apos;s persegue o objetivo do Sr. Lappalu, de prestar serviço a todos que necessitam e faz questão de manter viva e acesa as lembranças desse monumento da área médica.
          </p>

          <p className={styles.paragraph}>
            A Vita&apos;s Materiais Médicos prova ao público que todo processo de evolução, jamais substituiu a atenção e a cordialidade com os clientes, sempre com produtos e serviços de alta qualidade somada aos fornecedores capazes de assumir esta responsabilidade.
          </p>

          <p className={styles.paragraph}>
            A Vita&apos;s se orgulha em atender os profissionais e estudantes da saúde, os queridos idosos, os clientes portadores de necessidades especiais e o público em geral, contando com uma equipe de colaboradores treinados com conhecimentos específicos sobre os produtos.
          </p>

          <p className={styles.paragraph}>
            Desenvolvemos um papel fundamental no fortalecimento da qualidade de vida, sempre zelando pela satisfação e tranqüilidade dos clientes.
          </p>

          <p className={styles.paragraph}>
            Contamos com duas lojas situadas uma no Centro e outra no Hauer em Curitiba.<br/>
            Atendemos ao público com estacionamento conveniado para clientes em seu período de compras e uma vaga especial para deficientes físicos em frente à loja do Centro.
          </p>
        </article>
      </main>

      <footer className={grid.footer}>
        <Footer maps={false} newsletter={false} />
      </footer>
    </div>
  )
}

export default Home
