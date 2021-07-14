import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

// import products from '../products.json'
import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function Home({ products }) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>jpAIsys Store</title>
        <meta name="description" content="The Best Store Around" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={fromImageToUrl(product.image)} alt="No Image" />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products`)
  const products = await product_res.json()

  return {
    props: {
      products
    }
  }
}
