/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Router from 'next/router'

function custom404 () {
  useEffect(() => {
    Router.push('/')
  }, [])

  return (<></>)
}

export default custom404
