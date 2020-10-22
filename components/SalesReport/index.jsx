import React from 'react'
import {
  XAxis, YAxis, Tooltip,
  Line, LineChart, ResponsiveContainer, CartesianGrid
} from 'recharts'

import Wrapper from '../Wrapper'

const salesReport = [
  { last_seven_days: '15 Out', valor: 4300 },
  { last_seven_days: '16 Out', valor: 3800 },
  { last_seven_days: '17 Out', valor: 4800 },
  { last_seven_days: '18 Out', valor: 3908 },
  { last_seven_days: '19 Out', valor: 9800 },
  { last_seven_days: '20 Out', valor: 1398 },
  { last_seven_days: '21 Out', valor: 2400 }
]

function SalesReport () {
  const formatterToReal = number => `R$${Number(number).toLocaleString('pt-BR')}`

  return (
    <Wrapper
      title="Relatório de vendas"
      style={{ height: '280px' }}
    >
      <ResponsiveContainer>
        <LineChart
          data={salesReport}
          margin={{ top: 5, right: 35, left: 25, bottom: 5 }}
        >
          <XAxis
            dataKey="last_seven_days"
            stroke="0"
            tick={{
              fill: '#FFF7',
              fontSize: '14px',
              fontFamily: 'Overpass-Regular'
            }}
            tickMargin={10}
          />
          <YAxis
            tickFormatter={formatterToReal}
            stroke="0"
            tickMargin={15}
            tick={{
              fill: '#FFF7',
              fontSize: '14px',
              fontFamily: 'Overpass-Regular'
            }}
          />
          <CartesianGrid
            stroke="0"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: '#383B3E',
              borderColor: '#383B3E',
              borderRadius: '2px',
              color: '#FFF'
            }}
            formatter={formatterToReal}
          />
          <Line
            type="monotone"
            dataKey="valor"
            stroke="#22FF7A"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default SalesReport
