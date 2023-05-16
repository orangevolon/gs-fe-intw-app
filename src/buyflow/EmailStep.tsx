import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'
import useBuyFlow from '../hooks/useBuyFlow'

const EmailStep: React.FC = () => {
  const { collectedData, onSetField } = useUserInfo()
  const { onNext, onPrev } = useBuyFlow()

  const [email, setEmail] = useState(collectedData.email ?? '')

  const handleNext = () => {
    onSetField('email', email)
    onNext()
  }

  return (
    <Step onNext={handleNext} onPrev={onPrev}>
      <TextField
        label="Email"
        value={email}
        onChange={(value) => setEmail(value)}
        id="email"
      />
    </Step>
  )
}

export default EmailStep
