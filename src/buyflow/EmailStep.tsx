import React, { useState } from 'react'
import Step from '../components/Step'
import { useHistory } from 'react-router-dom'

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
      Email:{' '}
      <input
        type="email"
        onChange={({ target: { value } }) => {
          setEmail(value)
        }}
        value={email}
      ></input>
    </Step>
  )
}

export default EmailStep
