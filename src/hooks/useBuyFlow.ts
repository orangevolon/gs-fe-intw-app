import { useHistory, useLocation, useParams } from 'react-router-dom'
import { ProductIds } from '../types/product'

interface FlowParams {
  productId: ProductIds
}

const RETURN_PATH = '/'

const flows: Record<ProductIds, string[]> = {
  // Developer Insurance Flow
  [ProductIds.devIns]: ['email', 'age', 'summary'],

  // Designer Insurance Flow
  [ProductIds.desIns]: ['email', 'age', 'name', 'summary'],
}

const BUY_FLOW_PREFIX = '/buy'

const useBuyFlow = () => {
  const { productId } = useParams<FlowParams>()
  const location = useLocation()
  const history = useHistory()

  const buildPath = (route: string | undefined) => {
    const segments = [BUY_FLOW_PREFIX]
    if (productId) segments.push(productId)
    if (route) segments.push(route)
    return segments.join('/')
  }

  const getCurrentRoute = (flow: string[] | undefined) => {
    if (!flow) {
      console.warn(`No flow found for product: ${productId}`)
      return
    }

    const routeSegment = location.pathname.split('/').pop() ?? ''
    return flow.includes(routeSegment) ? routeSegment : flow[0]
  }

  const goToAdjacentRoute = (offset: number) => {
    if (!currentFlow || !currentRoute) {
      console.warn(`No flow found for product: ${productId}`)
      return
    }

    const currentIndex = currentFlow.indexOf(currentRoute)
    const adjRoute = currentFlow[currentIndex + offset]
    if (!adjRoute) {
      history.push(RETURN_PATH)
      return
    }

    const adjPath = buildPath(adjRoute)
    history.push(adjPath)
  }

  const currentFlow = flows[productId]
  const initialRoute = currentFlow?.[0]
  const currentRoute = getCurrentRoute(currentFlow)

  const onNext = () => goToAdjacentRoute(1)
  const onPrev = () => goToAdjacentRoute(-1)
  const initialPath = buildPath(initialRoute)

  return { onNext, onPrev, productId, initialPath }
}

export default useBuyFlow
