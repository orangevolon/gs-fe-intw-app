import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'

interface NameStepProps {
  onNext: (
    field: string,
    value: { firstName: string; lastName: string }
  ) => void
  onPrev: () => void
}

const NameStep: React.FC<NameStepProps> = ({ onNext, onPrev }) => {
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')

  const [lastName, setLastName] = useState('')
  const [lastNameError, setLastNameError] = useState('')

  const handleNext = () => {
    let hasError = false

    if (!firstName) {
      setFirstNameError('First name is required')
      hasError = true
    } else {
      setFirstNameError('')
    }

    if (!lastName) {
      setLastNameError('Last name is required')
      hasError = true
    } else {
      setLastNameError('')
    }

    if (!hasError) {
      onNext('name', { firstName, lastName })
    }
  }

  return (
    <Step onNext={handleNext} onPrev={onPrev}>
      <TextField
        label="First name"
        value={firstName}
        onChange={(value) => setFirstName(value)}
        id="first-name"
        error={firstNameError}
      />
      <TextField
        label="Last name"
        value={lastName}
        onChange={(value) => setLastName(value)}
        id="last-name"
        error={lastNameError}
      />
    </Step>
  )
}

export default NameStep
