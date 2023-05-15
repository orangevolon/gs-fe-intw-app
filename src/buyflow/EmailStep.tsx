import React, { useState } from 'react'
import Step from '../components/Step'
import { useHistory } from 'react-router-dom'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'

interface EmailStepProps {
  onNext: () => void
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
  const { collectedData, onSetField } = useUserInfo()
  const history = useHistory()

  const [email, setEmail] = useState(collectedData.email ?? '')

  const handleNext = () => {
    onSetField('email', email)
    onNext()
  }

  const handlePrev = () => {
    history.push('/')
  }

  return (
    <Step onNext={handleNext} onPrev={handlePrev}>
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
