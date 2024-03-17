'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function Home () {
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(!loading)
      const response = await fetch('/api/users', {
        headers: {
          accept: 'application/json',
          method: 'GET'
        }
      })
      if (response) {
        const data = await response.json()
        // setData(data)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(loading)
    }
  }

  return (
    <main>
      <Header />
      <div>
        <h1>
          <button onClick={() => fetchData()}>API</button>
        </h1>
        <Image src='/next.svg' alt='whops' width={200} height={1000} />
      </div>
    </main>
  )
}
