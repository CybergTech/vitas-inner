/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

// Seconds to unrender the message element
const secondsToEach = 4

class Message extends Component {
  constructor (props) {
    super(props)

    this.state = {
      secondsToUnrender: secondsToEach,
      willUnrender: false,
      toRender: true,
      unrenderInterval: null
    }
  }

  componentDidMount () {
    this.handleInterval()
  }

  componentWillUnmount () {
    clearInterval(this.unrenderInterval)
  }

  handleInterval () {
    this.unrenderInterval = setInterval(() => {
      this.setState({
        secondsToUnrender: this.state.secondsToUnrender - 0.02
      })

      if (this.state.secondsToUnrender <= 0) {
        this.handleCloseComponent()
      }
    }, 20)
  }

  handleClearInterval () {
    clearInterval(this.unrenderInterval)
  }

  handleCloseComponent () {
    this.setState({ willUnrender: true })

    setTimeout(() => {
      this.setState({ toRender: false })
    }, 450)
  }

  render () {
    const icon = this.props.type === 'success' ? 'check-circle' : 'times-circle'
    const typeClass = this.props.type === 'success' ? styles.success : styles.error

    return (
      <>
        {this.state.toRender &&
          <div
            className={`${styles.container} ${this.state.willUnrender && styles.slideOut}`}
            onClick={() => this.handleCloseComponent()}
            onMouseEnter={() => this.handleClearInterval()}
            onMouseLeave={() => this.handleInterval()}
          >
            <div className={styles.infoContent}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} className={`${styles.icon} ${typeClass}`} />
              </div>

              <div className={styles.body}>
                <span
                  className={`${styles.close} ${typeClass}`}
                  onClick={() => this.handleCloseComponent()}
                >
                  <FontAwesomeIcon icon="times" />
                </span>

                <h5 className={styles.text}>{this.props.text}</h5>
              </div>
            </div>

            <div className={`${styles.progressContainer} ${typeClass}`}>
              <div
                className={`${styles.progressBar} ${typeClass}`}
                style={{
                  width: `${(this.state.secondsToUnrender / secondsToEach) * 100}%`
                }}
              ></div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default Message
