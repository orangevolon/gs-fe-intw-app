import React from 'react'
import { useHistory } from 'react-router-dom'
import Step from '../components/Step'

interface SummaryStepProps {
  onPrev: () => void
  productId: string
  collectedData: {
    name?: { firstName: string; lastName: string }
    email: string
    age: number
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({
  onPrev,
  collectedData,
  productId,
}) => {
  const history = useHistory()

  const handleDone = () => {
    history.push(`/purchased=${productId}`)
  }

  return (
    <Step onPrev={onPrev} onDone={handleDone} doneLabel="Purchase">
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      {collectedData.name && (
        <>
          <div>First name: {collectedData.name.firstName}</div>
          <div>Last name: {collectedData.name.lastName}</div>
        </>
      )}
    </Step>
  )
}

export default SummaryStep
