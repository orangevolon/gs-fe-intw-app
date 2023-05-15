import React, { useState } from 'react'
import Step from '../components/Step'

interface AgeStepProps {
  onNext: (field: string, value: number) => void
  onPrev: () => void
}

const AgeStep: React.FC<AgeStepProps> = ({ onNext, onPrev }) => {
  const [age, setAge] = useState(0)

  return (
    <Step onNext={() => onNext('age', age)} onPrev={onPrev}>
      Age:{' '}
      <input
        type="number"
        onChange={({ target: { value } }) => {
          setAge(Number(value))
        }}
        value={age}
      ></input>
    </Step>
  )
}

export default AgeStep
