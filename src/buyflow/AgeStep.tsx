import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'
import useBuyFlow from '../hooks/useBuyFlow'

const AgeStep: React.FC = () => {
  const { onNext, onPrev } = useBuyFlow()
  const { collectedData, onSetField } = useUserInfo()

  const [age, setAge] = useState(collectedData.age ?? '')
  const [ageError, setAgeError] = useState('')

  const handleNext = () => {
    if (age === '') {
      setAgeError('Age is required')
      return
    }

    const ageNumber = Number(age)

    if (Number.isNaN(ageNumber)) {
      setAgeError('Age must be a number')
      return
    }

    if (ageNumber < 10) {
      setAgeError("You shouldn't play around with your dad's laptop")
      return
    }

    if (ageNumber > 100) {
      setAgeError('Go home and take a rest, you look tired')
      return
    }

    onSetField('age', ageNumber)
    onNext()
  }

  return (
    <Step onNext={handleNext} onPrev={onPrev}>
      <TextField
        label="Age"
        value={age}
        onChange={(value) => setAge(value)}
        error={ageError}
        id="age"
      />
    </Step>
  )
}

export default AgeStep
