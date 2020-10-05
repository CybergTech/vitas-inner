import React, { useState } from 'react'

import CreditCard from './CreditCard'
import Boleto from './Boleto'
import PicPay from './PicPay'

import styles from './styles.module.css'

function PaymentMethods () {
  const [chosenMethod, setChosenMethod] = useState(-1)
  let getChosenMethod

  if (chosenMethod === 0) {
    getChosenMethod = <CreditCard />
  } else if (chosenMethod === 1) {
    getChosenMethod = <Boleto />
  } else if (chosenMethod === 2) {
    getChosenMethod = <PicPay />
  } else {
    getChosenMethod = ''
  }

  return (
    <div className={styles.container}>
      <ul className={styles.methodsList}>
        <li
          className={`${styles.methodItem} ${chosenMethod === 0 && styles.active}`}
          onClick={() => setChosenMethod(0)}
          onDoubleClick={() => setChosenMethod(-1)}
        >
          Cartão de Crédito
        </li>
        <li
          className={`${styles.methodItem} ${chosenMethod === 1 && styles.active}`}
          onClick={() => setChosenMethod(1)}
          onDoubleClick={() => setChosenMethod(-1)}
        >
          Boleto
        </li>
        <li
          className={`${styles.methodItem} ${chosenMethod === 2 && styles.active}`}
          onClick={() => setChosenMethod(2)}
          onDoubleClick={() => setChosenMethod(-1)}
        >
          PicPay
        </li>
      </ul>

      <div className={styles.chosenMethod}>
        {getChosenMethod}
      </div>
    </div>
  )
}

export default PaymentMethods
