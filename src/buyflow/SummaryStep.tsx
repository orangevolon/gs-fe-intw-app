import React from 'react'
import { useHistory } from 'react-router-dom'
import Step from '../components/Step'
import ReadOnlyField from '../components/ReadOnlyField'
import { useUserInfo } from '../contexts/UserInfoProvider'
import useBuyFlow from '../hooks/useBuyFlow'

const SummaryStep: React.FC = () => {
  const { onPrev, productId } = useBuyFlow()
  const { collectedData } = useUserInfo()

  const history = useHistory()

  const handleDone = () => {
    history.push(`/purchased=${productId}`)
  }

  const summaryList = Object.entries(collectedData)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => ({
      label: fieldKeyToLabel[key],
      value,
    }))

  return (
    <Step onPrev={onPrev} onDone={handleDone} doneLabel="Purchase">
      {summaryList.map(({ label, value }) => (
        <ReadOnlyField key={label} label={label} value={value} />
      ))}
    </Step>
  )
}

export default SummaryStep

const fieldKeyToLabel: Record<string, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  age: 'Age',
}
