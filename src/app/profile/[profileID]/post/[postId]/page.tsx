"use client"

import { useParams } from "next/navigation"

const postId = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const params = useParams()
console.log(params.postId)
    return (
        <div></div>
  )
}

export default postId