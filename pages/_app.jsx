/* eslint-disable react/prop-types */
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import '../services/fontawesome'

import WhatsAppButton from '../components/WhatsAppButton'

import '../styles/globals.css'
import '../styles/nprogress.css'
import '../styles/stickyHeader.css'

Router.events.on('routeChangeStart', url => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App ({ Component, pageProps }) {
  return (
    <>
      <WhatsAppButton />
      <Component {...pageProps} />
    </>
  )
}

export default App
