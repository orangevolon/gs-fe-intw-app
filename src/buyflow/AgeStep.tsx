import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'
import { useUserInfo } from '../contexts/UserInfoProvider'
import useBuyFlow from '../hooks/useBuyFlow'

const AgeStep: React.FC = () => {
  const { onNext, onPrev } = useBuyFlow()
  const { collectedData, onSetField } = useUserInfo()
  const [age, setAge] = useState(collectedData.age ?? 0)

  const handleNext = () => {
    onSetField('age', age)
    onNext()
  }

  return (
    <Step onNext={handleNext} onPrev={onPrev}>
      <TextField
        label="Age"
        value={age}
        onChange={(value) => setAge(value)}
        id="age"
      />
    </Step>
  )
}

export default AgeStep
