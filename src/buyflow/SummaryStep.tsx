import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    name?: { firstName: string; lastName: string }
    email: string
    age: number
  }
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      {props.collectedData.name && (
        <>
          <div>First name: {props.collectedData.name.firstName}</div>
          <div>Last name: {props.collectedData.name.lastName}</div>
        </>
      )}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
