/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'

import { exists, validEmail } from '../../services/validation'

import Header from '../../components/Header'
import DetailDots from '../../components/DetailDots'
import Message from '../../components/Message'
import Footer from '../../components/Footer'

import grid from '../../styles/grid/clean.module.css'
import styles from '../../styles/Sign.module.css'

class Signin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      key: 1,
      email: '',
      password: '',
      disabled: true,
      messages: []
    }
  }

  // componentWillUnmount () {
  //   this.setState({
  //     key: 1,
  //     email: '',
  //     password: '',
  //     disabled: true,
  //     messages: []
  //   })
  // }

  changeEmail (e) {
    this.setState({ email: e })
    if (e.length > 0 && this.state.password.length > 0) {
      this.setState({ disabled: false })
    } else {
      this.setState({ disabled: true })
    }
  }

  changePassword (e) {
    this.setState({ password: e })
    if (e.length > 0 && this.state.email.length > 0) {
      this.setState({ disabled: false })
    } else {
      this.setState({ disabled: true })
    }
  }

  handleFormSubmit (e) {
    e.preventDefault()

    if (!exists(this.state.email) && !exists(this.state.password)) {
      this.setState(state => ({
        messages: [...state.messages, <Message
          key={state.key}
          type="error"
          text="Por favor, preencha o campo de email e senha!"
        />]
      }))
    } else if (!exists(this.state.email)) {
      this.setState(state => ({
        messages: [...state.messages, <Message
          key={state.key}
          type="error"
          text="Por favor, preencha o campo de email!"
        />]
      }))
    } else if (!validEmail(this.state.email)) {
      this.setState(state => ({
        messages: [...state.messages, <Message
          key={state.key}
          type="error"
          text="Por favor, preencha um email válido!"
        />]
      }))
    } else if (!exists(this.state.password)) {
      this.setState(state => ({
        messages: [...state.messages, <Message
          key={state.key}
          type="error"
          text="Por favor, preencha o campo de senha!"
        />]
      }))
    } else {
      this.setState(state => ({
        messages: [...state.messages, <Message
          key={state.key}
          type="success"
          text="Todos os dados foram preenchidos!"
        />]
      }))
    }

    this.setState(state => ({ key: state.key + 1 }))
  }

  render () {
    return (
      <div className={grid.wrapper}>
        <Head>
          <title>Entre na plataforma - Vita&apos;s Materiais Médicos e Hospitalares</title>
        </Head>

        <header className={`${grid.header} lightGray`}>
          <Header reduced></Header>
        </header>

        <main className={grid.main}>
          <div className={styles.signContainer}>
            <div className={styles.signinContent}>
              <DetailDots style={{ right: '83%', bottom: '-30px' }} />

              <div className={styles.signinWrapper}>
                <h2 className={styles.title}>
                  Olá! Informe seu email e senha para continuar
                </h2>

                <form
                  className={styles.form}
                  onSubmit={e => this.handleFormSubmit(e)}
                >
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.changeEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    className={styles.input}
                    placeholder="Senha"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.changePassword(e.target.value)}
                  />

                  <button
                    type="submit"
                    className={styles.button}
                    disabled={this.state.disabled}
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
                    <Link href="/conta/esqueceu-senha">
                      <a
                        className={styles.link}
                      >
                        Esqueci minha senha <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
                      </a>
                    </Link>

                    <Link href="/conta/cadastrar">
                      <a
                        className={styles.link}
                      >
                        Ainda não possuo uma conta <FontAwesomeIcon className={styles.icon} icon="chevron-right" />
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

export default Signin
