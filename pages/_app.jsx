/* eslint-disable react/prop-types */
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import '../services/fontawesome'

import '../styles/globals.css'
import '../styles/nprogress.css'
import '../styles/stickyHeader.css'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}
