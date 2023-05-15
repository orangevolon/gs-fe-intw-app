import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'
import NameStep from './NameStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.desIns]: 'Designer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    name: undefined,
    email: '',
    age: 0,
  })
  const getNextStepCallback = (nextStep: string) => (
    field: string,
    value: any
  ) => {
    updateData((data) => ({ ...data, [field]: value }))
    setStep(nextStep)
  }
  const getCurrentStep = () => {
    switch (currentStep) {
      case 'email': {
        return <EmailStep onNext={getNextStepCallback('age')} />
      }

      case 'age': {
        const nextStep =
          props.productId === ProductIds.desIns ? 'name' : 'summary'

        return (
          <AgeStep
            onNext={getNextStepCallback(nextStep)}
            onPrev={() => setStep('email')}
          />
        )
      }

      case 'name': {
        return (
          <NameStep
            onNext={getNextStepCallback('summary')}
            onPrev={() => setStep('age')}
          />
        )
      }

      case 'summary': {
        const prevStep = props.productId === ProductIds.desIns ? 'name' : 'age'
        return (
          <SummaryStep
            onPrev={() => setStep(prevStep)}
            collectedData={collectedData}
            productId={props.productId}
          />
        )
      }

      default: {
        return null
      }
    }
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {getCurrentStep()}
    </>
  )
}

export default Buyflow
