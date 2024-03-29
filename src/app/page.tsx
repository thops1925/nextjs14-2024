'use client'
import type { Metadata } from 'next'

import Header from '@/components/Header'
import Image from 'next/image'
import { toast, Toaster } from 'sonner'
import { useStore } from '@/store/user'

// export const metadata: Metadata = {
//   title: 'thops',
//   description: 'Generated by create next app'
// }

export default function Home () {
  const increasePopulation = useStore((state: any) => state.increasePopulation)
  const bears = useStore((state: any) => state.bears)
  const removeAllBears = useStore((state: any) => state.removeAllBears)
  const update = useStore((state: any) => state.updateBears)
  return (
    <main>
      <Header />
      <br />
      <br />
      <div>
        <h1>{bears} around here...</h1>
        <button onClick={increasePopulation}>one up</button>
        <br />
        <br />
        <button onClick={removeAllBears}>remove all</button>
        <br />
        <br />

        <button onClick={() => update('thopz')}>update</button>

        <Image src='/next.svg' alt='whops' width={200} height={1000} />

        <button onClick={() => toast.success('My first toast')}>
          Give me a toast
          <Toaster richColors />
        </button>
      </div>
    </main>
  )
}
