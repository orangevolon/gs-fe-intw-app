import React, { useState } from 'react'
import Step from '../components/Step'
import TextField from '../components/TextField'

interface AgeStepProps {
  onNext: (field: string, value: number) => void
  onPrev: () => void
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext, onPrev }) => {
  const [age, setAge] = useState(0)

  return (
    <Step onNext={() => onNext('age', age)} onPrev={onPrev}>
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
