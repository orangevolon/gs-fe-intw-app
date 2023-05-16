import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'
import useBuyFlow from '../hooks/useBuyFlow'

const SIMPLE_EMAIL_REGEX = /^(.+)@(.+)$/i

const EmailStep: React.FC = () => {
  const { collectedData, onSetField } = useUserInfo()
  const { onNext, onPrev } = useBuyFlow()

  const [email, setEmail] = useState(collectedData.email ?? '')
  const [emailError, setEmailError] = useState('')

  const handleNext = () => {
    if (!email) {
      setEmailError('Email is required')
      return
    }

    if (!SIMPLE_EMAIL_REGEX.test(email)) {
      setEmailError('Email format is invalid')
      return
    }

    onSetField('email', email)
    onNext()
  }

  return (
    <Step onNext={handleNext} onPrev={onPrev}>
      <TextField
        label="Email"
        value={email}
        onChange={(value) => setEmail(value.trim())}
        error={emailError}
        id="email"
      />
    </Step>
  )
}

export default EmailStep
