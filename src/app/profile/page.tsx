'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const profile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return (
    <div>
      my profile
      <div className='flex'>
        <Link href='/profile/1'>profile 1</Link>
        <Link href='/profile/2'>profile 2</Link>
        <Link href='/profile/3'>profile 3</Link>
      </div>
    </div>
  )
}

export default profile
