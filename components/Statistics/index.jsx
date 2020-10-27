import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.css'

function Statistics () {
  const [period, setPeriod] = useState('seven_days')
  const [labelText, setLabelText] = useState('7 dias')

  useEffect(() => {
    if (period === 'seven_days') {
      setLabelText('7 dias')
    } else if (period === 'fifteen_days') {
      setLabelText('15 dias')
    } else {
      setLabelText('30 dias')
    }
  }, [period])

  return (
    <>
      <div className={styles.title}>
        <span>Estatísticas</span>

        <select
          className={styles.select}
          value={period}
          onChange={e => setPeriod(e.target.value)}
        >
          <option value="seven_days">7 dias</option>
          <option value="fifteen_days">15 dias</option>
          <option value="thirty_days">30 dias</option>
        </select>
      </div>

      <div className={styles.statisticsWrapper}>
        <div className={styles.statistic}>
          <button>
            <Link href="/dashboard">
              <a>
                <div className={styles.info}>
                  <FontAwesomeIcon icon="layer-group" className={styles.icon} />
                  <div className={styles.content}>
                    <h4>
                      <span>Pedidos</span><br />
                      26
                    </h4>

                    <h5 className={styles.badStatistic}>
                      <FontAwesomeIcon icon="long-arrow-alt-up" className={styles.icon} />
                      14,13%
                      <span>Referente aos {labelText} passados</span>
                    </h5>
                  </div>
                </div>
              </a>
            </Link>
          </button>
        </div>

        <div className={styles.statistic}>
          <button>
            <Link href="/dashboard">
              <a>
                <div className={styles.info}>
                  <FontAwesomeIcon icon="dollar-sign" className={styles.icon} />
                  <div className={styles.content}>
                    <h4>
                      <span>Receita Bruta</span><br />
                      R$10.234,23
                    </h4>
                    <h5>
                      <FontAwesomeIcon icon="long-arrow-alt-up" className={styles.icon} />
                      30,40
                      <span>Referente aos {labelText} passados</span>
                    </h5>
                  </div>
                </div>
              </a>
            </Link>
          </button>
        </div>

        <div className={styles.statistic}>
          <button>
            <Link href="/dashboard">
              <a>
                <div className={styles.info}>
                  <FontAwesomeIcon icon="coins" className={styles.icon} />
                  <div className={styles.content}>
                    <h4>
                      <span>Receita Líquida</span><br />
                      R$4.900,99
                    </h4>
                    <h5>
                      <FontAwesomeIcon icon="long-arrow-alt-up" className={styles.icon} />
                      50,20
                      <span>Referente aos {labelText} passados</span>
                    </h5>
                  </div>
                </div>
              </a>
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Statistics
