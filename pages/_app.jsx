/* eslint-disable react/prop-types */
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

import {
  GoogleReCaptchaProvider
} from 'react-google-recaptcha-v3'

import '../services/fontawesome'

import '../styles/globals.css'
import '../styles/nprogress.css'
import '../styles/suneditor.css'

Router.events.on('routeChangeStart', url => {
  // console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App ({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LcmkMMUAAAAAPxWHrJjtxuatMbYllD9fdv6GZCx"
      language="pt-BR"
    >
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  )
}

export default App
