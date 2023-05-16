import { Link } from 'react-router-dom'
import { ProductIds } from '../types/product'
import { PRODUCT_IDS_TO_NAMES } from '../constants/products'

const AVAILABLE_PRODUCTS: ProductIds[] = [ProductIds.devIns, ProductIds.desIns]

const HomeScreen = () => {
  const productLinkPairs = AVAILABLE_PRODUCTS.map((productId) => ({
    link: `/buy/${productId}`,
    text: PRODUCT_IDS_TO_NAMES[productId],
  }))

  return (
    <section>
      <p>Welcome to Getsafe's Insurance</p>
      <ul>
        {productLinkPairs.map(({ link, text }) => (
          <li key={link}>
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeScreen
