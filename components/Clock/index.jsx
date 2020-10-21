import React, { Component } from 'react'

import styles from './styles.module.css'

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
      timeToRender: 0,
      dateToRender: 0,
      weekDayToRender: 0
    }
  }

  componentDidMount () {
    this.tick()

    this.timerID = setInterval(
      () => this.tick(),
      5000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState(state => ({
      date: new Date(),
      timeToRender: `${state.date.toLocaleTimeString('pt-BR').split(':')[0]}:${state.date.toLocaleTimeString('pt-BR').split(':')[1]}`,
      dateToRender: `${state.date.toLocaleDateString('pt-BR').split('/')[0]} de ${months[state.date.toLocaleDateString('pt-BR').split('/')[1] - 1]} de ${state.date.toLocaleDateString('pt-BR').split('/')[2]}`,
      weekDayToRender: weekDays[state.date.getDay()]
    }))
  }

  render () {
    // let time = this.state.date.toLocaleTimeString('pt-BR').split(':')
    // time = `${time[0]}:${time[1]}`

    // let date = this.state.date.toLocaleDateString('pt-BR').split('/')
    // date = `${date[0]} de ${months[date[1] - 1]} de ${date[2]}`
    // console.log(date)

    // const currentWeekDay = weekDays[this.state.date.getDay()]

    return (
      <div className={styles.clock}>
        <h3 className={styles.time}>{this.state.timeToRender}</h3>
        <h4 className={styles.date}>{this.state.dateToRender} - {this.state.weekDayToRender}</h4>
      </div>
    )
  }
}

export default Clock
