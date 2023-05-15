import React from 'react'
import { useHistory } from 'react-router-dom'
import Step from '../components/Step'
import ReadOnlyField from '../components/ReadOnlyField'

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

  const summaryList = buildSummaryList(collectedData)

  return (
    <Step onPrev={onPrev} onDone={handleDone} doneLabel="Purchase">
      {summaryList.map(({ label, value }) => (
        <ReadOnlyField key={label} label={label} value={value} />
      ))}
    </Step>
  )
}

export default SummaryStep

const buildSummaryList = (collectedData: SummaryStepProps['collectedData']) => {
  const list = [
    { label: 'Email', value: collectedData.email },
    { label: 'Age', value: collectedData.age },
  ]

  if (collectedData.name) {
    list.push({ label: 'First name', value: collectedData.name.firstName })
    list.push({ label: 'Last name', value: collectedData.name.lastName })
  }

  return list
}
