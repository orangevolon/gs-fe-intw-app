import React from 'react'
import AgeStep from '../buyflow/AgeStep'
import EmailStep from '../buyflow/EmailStep'
import SummaryStep from '../buyflow/SummaryStep'
import NameStep from '../buyflow/NameStep'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ProductIds } from '../types/product'
import { PRODUCT_IDS_TO_NAMES } from '../constants/products'
import useBuyFlow from '../hooks/useBuyFlow'

const BuyFlowScreen: React.FC = () => {
  const { initialPath } = useBuyFlow()
  const productId = PRODUCT_IDS_TO_NAMES[ProductIds.devIns]

  return (
    <section>
      <h4>Buying {productId}</h4>
      <Switch>
        <Route path="/buy/:productId/email" component={EmailStep} />
        <Route path="/buy/:productId/age" component={AgeStep} />
        <Route path="/buy/:productId/name" component={NameStep} />
        <Route path="/buy/:productId/summary" component={SummaryStep} />
        <Route path="/buy/:productId">
          <Redirect to={initialPath} />
        </Route>
      </Switch>
    </section>
  )
}

export default BuyFlowScreen
