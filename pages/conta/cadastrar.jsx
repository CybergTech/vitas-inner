/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { cpfMask, dateMask, phoneMask, withoutNumber } from '../../services/masks'
import { exists, validDate, validEmail, validPassword, equals } from '../../services/validation'

import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Input from '../../components/Input'
import Message from '../../components/Message'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

function Signup () {
  const [session, loading] = useSession()

  const [key, setKey] = useState(1)
  const [buttonText, setButtonText] = useState('Continuar')

  const [firstName, setFirstName] = useState('')
  const [helpFirstName, setHelpFirstName] = useState('')

  const [lastName, setLastName] = useState('')
  const [helpLastName, setHelpLastName] = useState('')

  const [cpf, setCpf] = useState('')
  const [helpCpf, setHelpCpf] = useState('')

  const [birthday, setBirthday] = useState('')
  const [helpBirthday, setHelpBirthday] = useState('')

  const [email, setEmail] = useState('')
  const [helpEmail, setHelpEmail] = useState('')

  const [password, setPassword] = useState('')
  const [helpPassword, setHelpPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')
  const [helpConfirmPassword, setHelpConfirmPassword] = useState('')

  const [whatsapp, setWhatsapp] = useState(false)

  const [whatsappPhone, setWhatsappPhone] = useState('')
  const [helpWhatsappPhone, setHelpWhatsappPhone] = useState('')

  const [agreement, setAgreement] = useState(false)
  const [helpAgreement, setHelpAgreement] = useState('')

  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!loading && session) {
      Router.push('/')
    }
  }, [loading])

  function changeButtonText (loading = true) {
    if (loading) {
      setButtonText(<FontAwesomeIcon icon="spinner" pulse />)
    } else {
      setButtonText('Continuar')
    }
  }

  function changeFirstName (value) {
    setFirstName(withoutNumber(value))
    setHelpFirstName('')
  }

  function changeLastName (value) {
    setLastName(withoutNumber(value))
    setHelpLastName('')
  }

  function changeCpf (value) {
    setCpf(cpfMask(value))
    setHelpCpf('')
  }

  function changeBirthday (value) {
    setBirthday(dateMask(value))
    setHelpBirthday('')
  }

  function changeEmail (value) {
    setEmail(value)
    setHelpEmail('')
  }

  function changePassword (value) {
    setPassword(value)
    setHelpPassword('')
  }

  function changeConfirmPassword (value) {
    setConfirmPassword(value)
    setHelpConfirmPassword('')
  }

  function changeWhatsapp (value) {
    setWhatsapp(value)
    setHelpWhatsappPhone('')
  }

  function changeWhatsappPhone (value) {
    setWhatsappPhone(phoneMask(value))
    setHelpWhatsappPhone('')
  }

  function changeAgreement (value) {
    setAgreement(value)
    setHelpAgreement('')
  }

  function clearAllHelps () {
    setHelpFirstName('')
    setHelpLastName('')
    setHelpCpf('')
    setHelpBirthday('')
    setHelpEmail('')
    setHelpPassword('')
    setHelpConfirmPassword('')
    setHelpWhatsappPhone('')
    setHelpAgreement('')
  }

  function checkIfThereIsAnError () {
    if (
      exists(helpFirstName) ||
      exists(helpLastName) ||
      exists(helpCpf) ||
      exists(helpBirthday) ||
      exists(helpEmail) ||
      exists(helpPassword) ||
      exists(helpConfirmPassword) ||
      exists(helpWhatsappPhone) ||
      exists(helpAgreement)
    ) {
      return true
    }

    return false
  }

  function handleFormSubmit (e) {
    e.preventDefault()
    changeButtonText()
    clearAllHelps()

    if (!exists(firstName)) {
      setHelpFirstName('O nome é obrigatório')
    }

    if (!exists(lastName)) {
      setHelpLastName('O sobrenome é obrigatório')
    }

    if (!exists(cpf)) {
      setHelpCpf('O CPF é obrigatório')
    }

    if (!exists(birthday)) {
      setHelpBirthday('A data de nascimento é obrigatória')
    } else if (!validDate(birthday, true)) {
      setHelpBirthday('A data de nascimento digitada é inválida')
    }

    if (!exists(email)) {
      setHelpEmail('O email é obrigatório')
    } else if (!validEmail(email, true)) {
      setHelpEmail('O email digitado é inválido')
    }

    if (!exists(password)) {
      setHelpPassword('A senha é obrigatória')
    } else if (!validPassword(password)) {
      setHelpPassword('A senha precisa ao menos conter 6 caracteres')
    }

    if (!exists(confirmPassword)) {
      setHelpConfirmPassword('A confirmação da senha é obrigatória')
    } else if (!equals(password, confirmPassword)) {
      setHelpConfirmPassword('As senhas não coincidem')
    }

    if (!exists(agreement)) {
      setHelpAgreement('Só falta você concordar com os Termos e Políticas!')
    }

    if (whatsapp && !exists(whatsappPhone)) {
      setHelpWhatsappPhone('O número do seu WhatsApp está sendo obrigatório')
    }

    setTimeout(() => {
      if (checkIfThereIsAnError()) {
        setMessages([...messages, <Message
          key={key}
          type="error"
          text="Ocorreu algum erro!"
        />])
      } else {
        setMessages([...messages, <Message
          key={key}
          type="success"
          text="Tudo foi checado com sucesso!"
        />])
      }

      changeButtonText(false)
    }, 500)

    setKey(key + 1)
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
                <a
                  className={styles.signLink}
                  href="https://empresas.vitas.com.br"
                >Vita’s para empresas</a>
              </h4>

              <form
                className={`${styles.form} ${styles.signupForm}`}
                onSubmit={e => handleFormSubmit(e)}
              >
                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <Input
                      name="firstname"
                      value={firstName}
                      placeholder="Nome"
                      icon="user-alt"
                      onChange={e => changeFirstName(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpFirstName}
                    </div>
                  </div>

                  <div className={styles.normalColumn}>
                    <Input
                      name="lastname"
                      value={lastName}
                      placeholder="Sobrenome"
                      icon="user-alt"
                      onChange={e => changeLastName(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpLastName}
                    </div>
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <Input
                      name="cpf"
                      value={cpf}
                      placeholder="CPF"
                      icon="id-card"
                      onChange={e => changeCpf(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpCpf}
                    </div>
                  </div>

                  <div className={styles.normalColumn}>
                    <Input
                      name="birthday"
                      value={birthday}
                      placeholder="Data de Nascimento - Ex: 04/03/2002"
                      icon="calendar-day"
                      onChange={e => changeBirthday(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpBirthday}
                    </div>
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.wideColumn}>
                    <Input
                      name="email"
                      value={email}
                      placeholder="Email"
                      icon="envelope"
                      onChange={e => changeEmail(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpEmail}
                    </div>
                  </div>
                </div>

                <div className={styles.group}>
                  <div className={styles.normalColumn}>
                    <Input
                      name="password"
                      value={password}
                      placeholder="Senha"
                      icon="lock"
                      type="password"
                      onChange={e => changePassword(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpPassword}
                    </div>
                  </div>

                  <div className={styles.normalColumn}>
                    <Input
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirme a senha"
                      icon="lock"
                      type="password"
                      onChange={e => changeConfirmPassword(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpConfirmPassword}
                    </div>
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
                          onChange={() => changeWhatsapp(!whatsapp)}
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
                    <Input
                      name="whatsappPhone"
                      value={whatsappPhone}
                      placeholder="Telefone - Ex: (41) 99999-9999"
                      icon="phone-alt"
                      onChange={e => changeWhatsappPhone(e.target.value)}
                    />

                    <div className={styles.helpBlock}>
                      {helpWhatsappPhone}
                    </div>
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
                          onChange={() => changeAgreement(!agreement)}
                        />
                        <span className={styles.checkboxCustom}></span>
                      </label>

                      <label
                        htmlFor="agreementCheckbox"
                        className={styles.label}
                      >
                        &nbsp;&nbsp;&nbsp;Ao criar uma conta, eu concordo com as
                        <Link href="/sobre/politicas-de-provacidade">
                          <a className={styles.signLink}>
                            {' '}Políticas de Privacidade{' '}
                          </a>
                        </Link>
                        e<br />
                        &nbsp;&nbsp;&nbsp;
                        <Link href="/sobre/termos-e-condicoes">
                          <a className={styles.signLink}>
                            {' '}Termos & Condições da Vita’s
                          </a>
                        </Link>.
                      </label>

                    </div>

                    <div className={styles.helpBlock}>
                      {helpAgreement}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.button}
                >
                  {buttonText}
                </button>
              </form>

              <div className={styles.divisionOr}>
                <hr className={styles.lineThrough} />
                <h4 className={styles.text}>OU</h4>
              </div>

              <div className={styles.otherOptions}>
                <div className={styles.socialMediaOptions}>
                  <div className={styles.littleColumn}>
                    <button
                      type="button"
                      className={styles.googleButton}
                      onClick={() => signIn('google')}
                    >
                      <div className={styles.googleLogo}>
                        <img src="/images/google.svg" alt="google" />
                      </div>

                      <h4 className={styles.googleText}>Fazer login com o Google</h4>
                    </button>
                  </div>

                  <div className={styles.littleColumn}>
                    <button
                      type="button"
                      className={styles.facebookButton}
                      onClick={() => signIn('facebook')}
                    >
                      <div className={styles.facebookLogo}>
                        <img src="/images/facebook.svg" alt="facebook" />
                      </div>

                      <h4 className={styles.facebookText}>Continuar com o Facebook</h4>
                    </button>
                  </div>
                </div>

                <div className={styles.links}>
                  <Link href="/conta/entrar">
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

        <div className="messagesContainer">
          {messages}
        </div>
      </main>

      <footer className={grid.footer}>
        <Footer newsletter={false} maps={false} />
      </footer>
    </div>
  )
}

export default Signup
