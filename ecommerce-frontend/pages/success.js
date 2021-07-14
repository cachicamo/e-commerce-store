import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
// import Link from 'next/link'

import { API_URL } from '../utils/urls'

const userOrder = (session_id) => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${API_URL}/orders/confirm`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ checkout_session: session_id })
        })
        const data = await res.json()
        setOrder(data)
      } catch (error) {
        setOrder(null)
      }
      setLoading(false)
    }
    fetchOrder()
  }, [session_id])

  return { order, loading}
}


export default function Success() {

  const router = useRouter()
  const { session_id } = router.query
  console.log('Success',session_id)
  const { order, loading } = userOrder(session_id)

  return (
    <div>
      <Head>
        <title>Thank you for your purchase!</title>
        <meta name="description" content="Thank you for your purchase" />
      </Head>
        <h2>Success!</h2>

        {loading && <p>Loading...</p>}
        {order && <p>Your order is confirmed, with order number: {order.id}</p>}
     
    </div>
  )
}


