/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'

import { cpfMask, dateMask, phoneMask, withoutNumber } from '../../services/masks'
import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

function Signup () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [whatsapp, setWhatsapp] = useState(false)
  const [whatsappPhone, setWhatsappPhone] = useState('')
  const [agreement, setAgreement] = useState(false)

  function handleFormSubmit (e) {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <div className={grid.wrapper}>
      <Head>
        <title>Cadastre-se na plataforma - Vita&apos;s Materiais Médicos e Hospitalares</title>
      </Head>

      <header className={`${grid.header} lightGray`}>
        <Header reduced></Header>
      </header>

      <main className={grid.main}>
        <div className={styles.signContainer}>
          <div className={styles.signupContent}>
            <DetailDots style={{ right: '91.5%', bottom: '-30px' }} />

            <div className={styles.signupWrapper}>
              <h2 className={styles.title}>
                Vamos lá! Realize o cadastro rápido para adquirir o que<br/>
                você precisa
              </h2>
              <h4 className={styles.subtitle}>
                Você representa uma empresa? Faça parte da&nbsp;
                <a href="https://empresas.vitas.com.br">Vita’s para empresas</a>
              </h4>

              <form
                className={`${styles.form} ${styles.signupForm}`}
                onSubmit={e => handleFormSubmit(e)}
              >
                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Nome"
                      name="firstname"
                      value={firstName}
                      onChange={e => setFirstName(withoutNumber(e.target.value))}
                    />
                  </div>

                  <div className={styles.normalColumn}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Sobrenome"
                      name="lastname"
                      value={lastName}
                      onChange={e => setLastName(withoutNumber(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="CPF"
                      name="cpf"
                      value={cpf}
                      onChange={e => setCpf(cpfMask(e.target.value))}
                    />
                  </div>

                  <div className={styles.normalColumn}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Data de Nascimento - Ex: 04/03/2002"
                      name="birthday"
                      value={birthday}
                      onChange={e => setBirthday(dateMask(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.wideColumn}>
                    <input
                      type="email"
                      className={styles.input}
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <input
                      type="password"
                      className={styles.input}
                      placeholder="Senha"
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>

                  <div className={styles.normalColumn}>
                    <input
                      type="password"
                      className={styles.input}
                      placeholder="Confirme a senha"
                      name="password"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.wideColumn}>
                    <div className={styles.checkboxContainer}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="whatsapp"
                          id="whatsappCheckbox"
                          className={styles.checkbox}
                          checked={whatsapp}
                          onChange={() => setWhatsapp(!whatsapp)}
                        />
                        <span className={styles.checkboxCustom}></span>
                      </label>

                      <label
                        htmlFor="whatsappCheckbox"
                        className={styles.label}
                      >
                        &nbsp;&nbsp;&nbsp;Quero receber notificações e atendimento pelo WhatsApp
                      </label>
                    </div>
                  </div>
                </div>

                <div className={`${styles.group} ${whatsapp ? styles.show : styles.hide}`}>
                  <div className={styles.normalColumn}>
                    <input
                      type="text"
                      className={styles.input}
                      placeholder="Telefone - Ex: (41) 99999-9999"
                      name="whatsapp_phone"
                      value={whatsappPhone}
                      onChange={e => setWhatsappPhone(phoneMask(e.target.value))}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.wideColumn}>
                    <div className={styles.checkboxContainer}>
                      <label className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          name="agreement"
                          id="agreementCheckbox"
                          className={styles.checkbox}
                          checked={agreement}
                          onChange={() => setAgreement(!agreement)}
                        />
                        <span className={styles.checkboxCustom}></span>
                      </label>

                      <label
                        htmlFor="agreementCheckbox"
                        className={styles.label}
                      >
                        &nbsp;&nbsp;&nbsp;Ao criar uma conta, eu concordo com as Política de Privacidade e Termos<br />
                        &nbsp;&nbsp;&nbsp;& Condições da Vita’s.
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.button}
                >
                  Continuar
                </button>
              </form>

              <div className={styles.divisionOr}>
                <hr className={styles.lineThrough} />
                <h4 className={styles.text}>OU</h4>
              </div>

              <div className={styles.otherOptions}>
                <div className={styles.socialMediaOptions}></div>
                <div className={styles.links}>
                  <Link href="/account/signin">
                    <a
                      className={styles.link}
                    >
                      Já possuo uma conta <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>
    </div>
  )
}

export default Signup
