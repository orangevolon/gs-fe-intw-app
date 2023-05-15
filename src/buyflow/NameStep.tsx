import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'

interface NameStepProps {
  onNext: () => void
  onPrev: () => void
}

const NameStep: React.FC<NameStepProps> = ({ onNext, onPrev }) => {
  const { collectedData, onSetField } = useUserInfo()

  const [firstName, setFirstName] = useState(collectedData.firstName ?? '')
  const [firstNameError, setFirstNameError] = useState('')

  const [lastName, setLastName] = useState(collectedData.lastName ?? '')
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
      onSetField('firstName', firstName)
      onSetField('lastName', lastName)
      onNext()
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
