import React, { useState } from 'react'

interface NameStepProps {
  onNext: (
    field: string,
    value: { firstName: string; lastName: string }
  ) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
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
      props.onNext('name', { firstName, lastName })
    }
  }

  return (
    <>
      <div>
        First name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstName(value.trim())
          }}
          value={firstName}
          required
        />
        {firstNameError && <div>{firstNameError}</div>}
      </div>
      <div>
        Last name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastName(value.trim())
          }}
          value={lastName}
        />
        {lastNameError && <div>{lastNameError}</div>}
      </div>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default NameStep
