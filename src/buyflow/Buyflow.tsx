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
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData((data) => ({ ...data, [field]: value }))
    setStep(nextStep)
  }
  const getCurrentStep = () => {
    switch (currentStep) {
      case 'email': {
        return <EmailStep cb={getStepCallback('age')} />
      }

      case 'age': {
        const nextStep =
          props.productId === ProductIds.desIns ? 'name' : 'summary'

        return <AgeStep cb={getStepCallback(nextStep)} />
      }

      case 'name': {
        return <NameStep onNext={getStepCallback('summary')} />
      }

      case 'summary': {
        return <SummaryStep collectedData={collectedData} />
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
