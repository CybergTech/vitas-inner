import React from 'react'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3'

const YourReCaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const token = executeRecaptcha('login_page')
  console.log(token)

  return (
    <h4>Teste</h4>
  )
}

function Recaptcha () {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LcmkMMUAAAAAPxWHrJjtxuatMbYllD9fdv6GZCx"
      language="pt-BR"
    >
      <YourReCaptchaComponent />
    </GoogleReCaptchaProvider>
  )
}

export default Recaptcha
