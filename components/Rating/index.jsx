import React from 'react'

import Wrapper from '../Wrapper'

import styles from './styles.module.css'

function Rating () {
  return (
    <Wrapper title="Avaliação do cliente">
      <div className={styles.container}>
        <div>
          <img
            src="/images/icons/fas-star.svg"
            alt="Fullfilled-Star"
            className={styles.icon}
          />
          <img
            src="/images/icons/fas-star.svg"
            alt="Fullfilled-Star"
            className={styles.icon}
          />
          <img
            src="/images/icons/fas-star.svg"
            alt="Fullfilled-Star"
            className={styles.icon}
          />
          <img
            src="/images/icons/fas-star-half.svg"
            alt="HalfFilled-Star"
            className={styles.icon}
          />
          <img
            src="/images/icons/far-star.svg"
            alt="Empty-Star"
            className={styles.icon}
          />
        </div>

        <h3>3.5</h3>
      </div>
    </Wrapper>
  )
}

export default Rating
