import React, { useState } from 'react'
import Step from '../components/Step'
import { useHistory } from 'react-router-dom'
import TextField from '../components/TextField'

interface EmailStepProps {
  onNext: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ onNext }) => {
  const [email, setEmail] = useState('')
  const history = useHistory()

  const handleNext = () => {
    onNext('email', email)
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
