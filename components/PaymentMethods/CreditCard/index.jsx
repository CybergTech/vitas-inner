import React, { useState } from 'react'

import { cpfMask, monthMask, yearMask, cvvMask } from '../../../services/masks'

import Input from '../../Input'

import styles from './styles.module.css'

function CreditCard () {
  const [cardName, setCardName] = useState('')
  const [cpf, setCpf] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.wideColumn}`}>
        <Input
          name="card_name"
          value={cardName}
          placeholder="Nome no cartão"
          icon="user-alt"
          onChange={e => setCardName(e.target.value)}
        />
      </div>

      <div className={`${styles.column} ${styles.w40Column}`}>
        <Input
          name="cpf"
          value={cpf}
          placeholder="CPF"
          icon="id-card"
          onChange={e => setCpf(cpfMask(e.target.value))}
        />
      </div>

      <div className={`${styles.column} ${styles.w60Column}`}>
        <Input
          name="card_number"
          value={cardNumber}
          placeholder="Número do Cartão"
          icon="credit-card"
          onChange={e => setCardNumber(e.target.value)}
        />
      </div>

      <div className={`${styles.column} ${styles.w20Column}`}>
        <Input
          name="expire_month"
          value={month}
          placeholder="MM"
          icon="calendar"
          onChange={e => setMonth(monthMask(e.target.value))}
        />
      </div>

      <div className={`${styles.column} ${styles.w20Column}`}>
        <Input
          name="expire_year"
          value={year}
          placeholder="AAAA"
          icon="calendar"
          onChange={e => setYear(yearMask(e.target.value))}
        />
      </div>

      <div className={`${styles.column} ${styles.w55Column}`}>
        <Input
          name="cvv"
          value={cvv}
          placeholder="Código de Segurança"
          icon="lock"
          onChange={e => setCvv(cvvMask(e.target.value))}
        />
      </div>
    </div>
  )
}

export default CreditCard
