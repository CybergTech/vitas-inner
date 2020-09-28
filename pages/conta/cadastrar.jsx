/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'

import { cpfMask, dateMask, phoneMask, withoutNumber } from '../../services/masks'
import { exists, validDate, validEmail, validPassword, equals } from '../../services/validation'

import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Message from '../../components/Message'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

class Signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: 1,
      buttonText: 'Continuar',

      firstName: '',
      helpFirstName: '',

      lastName: '',
      helpLastName: '',

      cpf: '',
      helpCpf: '',

      birthday: '',
      helpBirthday: '',

      email: '',
      helpEmail: '',

      password: '',
      helpPassword: '',

      confirmPassword: '',
      helpConfirmPassword: '',

      whatsapp: false,

      whatsappPhone: '',
      helpWhatsappPhone: '',

      agreement: false,
      helpAgreement: '',

      messages: []
    }
  }

  changeButtonText (loading = true) {
    if (loading) {
      this.setState({
        buttonText: <FontAwesomeIcon icon="spinner" pulse />
      })
    } else {
      this.setState({
        buttonText: 'Continuar'
      })
    }
  }

  changeFirstName (value) {
    this.setState({
      firstName: withoutNumber(value),
      helpFirstName: ''
    })
  }

  changeLastName (value) {
    this.setState({
      lastName: withoutNumber(value),
      helpLastName: ''
    })
  }

  changeCpf (value) {
    this.setState({
      cpf: cpfMask(value),
      helpCpf: ''
    })
  }

  changeBirthday (value) {
    this.setState({
      birthday: dateMask(value),
      helpBirthday: ''
    })
  }

  changeEmail (value) {
    this.setState({
      email: value,
      helpEmail: ''
    })
  }

  changePassword (value) {
    this.setState({
      password: value,
      helpPassword: ''
    })
  }

  changeConfirmPassword (value) {
    this.setState({
      confirmPassword: value,
      helpConfirmPassword: ''
    })
  }

  changeWhatsapp (value) {
    this.setState({
      whatsapp: value,
      helpWhatsappPhone: ''
    })
  }

  changeWhatsappPhone (value) {
    this.setState({
      whatsappPhone: phoneMask(value),
      helpWhatsappPhone: ''
    })
  }

  changeAgreement (value) {
    this.setState({
      agreement: value,
      helpAgreement: ''
    })
  }

  clearAllHelps () {
    this.setState({
      helpFirstName: '',
      helpLastName: '',
      helpCpf: '',
      helpBirthday: '',
      helpEmail: '',
      helpPassword: '',
      helpConfirmPassword: '',
      helpWhatsappPhone: '',
      helpAgreement: ''
    })
  }

  checkIfThereIsAnError () {
    if (
      exists(this.state.helpFirstName) ||
      exists(this.state.helpLastName) ||
      exists(this.state.helpCpf) ||
      exists(this.state.helpBirthday) ||
      exists(this.state.helpEmail) ||
      exists(this.state.helpPassword) ||
      exists(this.state.helpConfirmPassword) ||
      exists(this.state.helpWhatsappPhone) ||
      exists(this.state.helpAgreement)
    ) {
      return true
    }

    return false
  }

  handleFormSubmit (e) {
    e.preventDefault()
    this.changeButtonText()
    this.clearAllHelps()

    if (!exists(this.state.firstName)) {
      this.setState({
        helpFirstName: 'O nome é obrigatório'
      })
    }

    if (!exists(this.state.lastName)) {
      this.setState({
        helpLastName: 'O sobrenome é obrigatório'
      })
    }

    if (!exists(this.state.cpf)) {
      this.setState({
        helpCpf: 'O CPF é obrigatório'
      })
    }

    if (!exists(this.state.birthday)) {
      this.setState({
        helpBirthday: 'A data de nascimento é obrigatória'
      })
    } else if (!validDate(this.state.birthday, true)) {
      this.setState({
        helpBirthday: 'A data de nascimento digitada é inválida'
      })
    }

    if (!exists(this.state.email)) {
      this.setState({
        helpEmail: 'O email é obrigatório'
      })
    } else if (!validEmail(this.state.email, true)) {
      this.setState({
        helpEmail: 'O email digitado é inválido'
      })
    }

    if (!exists(this.state.password)) {
      this.setState({
        helpPassword: 'A senha é obrigatória'
      })
    } else if (!validPassword(this.state.password)) {
      this.setState({
        helpPassword: 'A senha precisa ao menos conter 6 caracteres'
      })
    }

    if (!exists(this.state.confirmPassword)) {
      this.setState({
        helpConfirmPassword: 'A confirmação da senha é obrigatória'
      })
    } else if (!equals(this.state.password, this.state.confirmPassword)) {
      this.setState({
        helpConfirmPassword: 'As senhas não coincidem'
      })
    }

    if (!exists(this.state.agreement)) {
      this.setState({
        helpAgreement: 'Só falta você concordar com os Termos e Políticas!'
      })
    }

    if (this.state.whatsapp && !exists(this.state.whatsappPhone)) {
      this.setState({
        helpWhatsappPhone: 'O número do seu WhatsApp está sendo obrigatório'
      })
    }

    setTimeout(() => {
      if (this.checkIfThereIsAnError()) {
        this.setState(state => ({
          messages: [...state.messages, <Message
            key={state.key}
            type="error"
            text="Ocorreu algum erro!"
          />]
        }))
      } else {
        this.setState(state => ({
          messages: [...state.messages, <Message
            key={state.key}
            type="success"
            text="Tudo foi checado com sucesso!"
          />]
        }))
      }

      this.changeButtonText(false)
    }, 500)

    this.setState(state => ({ key: state.key + 1 }))
  }

  render () {
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
                  onSubmit={e => this.handleFormSubmit(e)}
                >
                  <div className={styles.group}>
                    <div className={styles.normalColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Nome"
                        name="firstname"
                        value={this.state.firstName}
                        onChange={e => this.changeFirstName(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpFirstName}
                      </div>
                    </div>

                    <div className={styles.normalColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Sobrenome"
                        name="lastname"
                        value={this.state.lastName}
                        onChange={e => this.changeLastName(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpLastName}
                      </div>
                    </div>
                  </div>

                  <div className={styles.group}>
                    <div className={styles.normalColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="CPF"
                        name="cpf"
                        value={this.state.cpf}
                        onChange={e => this.changeCpf(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpCpf}
                      </div>
                    </div>

                    <div className={styles.normalColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Data de Nascimento - Ex: 04/03/2002"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={e => this.changeBirthday(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpBirthday}
                      </div>
                    </div>
                  </div>

                  <div className={styles.group}>
                    <div className={styles.wideColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.changeEmail(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpEmail}
                      </div>
                    </div>
                  </div>

                  <div className={styles.group}>
                    <div className={styles.normalColumn}>
                      <input
                        type="password"
                        className={styles.input}
                        placeholder="Senha"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.changePassword(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpPassword}
                      </div>
                    </div>

                    <div className={styles.normalColumn}>
                      <input
                        type="password"
                        className={styles.input}
                        placeholder="Confirme a senha"
                        name="password"
                        value={this.state.confirmPassword}
                        onChange={e => this.changeConfirmPassword(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpConfirmPassword}
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
                            checked={this.state.whatsapp}
                            onChange={() => this.changeWhatsapp(!this.state.whatsapp)}
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

                  <div className={`${styles.group} ${this.state.whatsapp ? styles.show : styles.hide}`}>
                    <div className={styles.normalColumn}>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="Telefone - Ex: (41) 99999-9999"
                        name="whatsapp_phone"
                        value={this.state.whatsappPhone}
                        onChange={e => this.changeWhatsappPhone(e.target.value)}
                      />

                      <div className={styles.helpBlock}>
                        {this.state.helpWhatsappPhone}
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
                            checked={this.state.agreement}
                            onChange={() => this.changeAgreement(!this.state.agreement)}
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
                        {this.state.helpAgreement}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={styles.button}
                  >
                    {this.state.buttonText}
                  </button>
                </form>

                <div className={styles.divisionOr}>
                  <hr className={styles.lineThrough} />
                  <h4 className={styles.text}>OU</h4>
                </div>

                <div className={styles.otherOptions}>
                  <div className={styles.socialMediaOptions}></div>
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
            {this.state.messages}
          </div>
        </main>

        <footer className={grid.footer}>
          <Footer newsletter={false} maps={false} />
        </footer>
      </div>
    )
  }
}

export default Signup
