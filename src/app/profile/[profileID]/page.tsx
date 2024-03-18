'use client'

import { useParams, useRouter } from 'next/navigation'

const profileId = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>{params.profileID}</h1>
      <button onClick={() => router.push('/')}>back</button>
    </div>
  )
}

export default profileId
