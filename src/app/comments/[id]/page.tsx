'use client'
import { useEffect, useState } from 'react'

export default function CommentId ({ params }: any) {
  const [post, setPost] = useState<any | null>(null)

  const getCommentById = async (id: string) => {
    try {
      const response = await fetch(`/api/comment/${id}`)
      if (!response || !response.ok) {
        throw new Error('Failed to fetch comment')
      }
      const data = await response.json()
      setPost(data.user)
    } catch (error) {
      console.error('Error fetching comment:', error)
      return null
    }
  }

  useEffect(() => {
    getCommentById(params.id)
  }, [params.id])

  return (
    <div>
      <p>Comment</p>
      {/* Display other comment data here */}
      {post !== null && (
        <div>
          <p>Name: {post.id}</p>
          <p>Email: {post.name}</p>
          <p>Body: {post.age}</p>
        </div>
      )}
      {post === null && <p>Loading...</p>}
    </div>
  )
}
