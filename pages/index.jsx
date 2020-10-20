/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Router from 'next/router'

function checkToRedirect () {
  // Check simulator
  useEffect(() => {
    Router.push('/conta/entrar')
  }, [])

  return (<></>)
}

export default checkToRedirect
