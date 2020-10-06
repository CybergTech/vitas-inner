/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Router from 'next/router'

function Handler () {
  useEffect(() => {
    Router.push('/identificacao')
  }, [])

  return (<></>)
}

export default Handler
