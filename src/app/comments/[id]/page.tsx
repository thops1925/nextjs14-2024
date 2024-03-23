'use client'
import { useEffect, useState } from 'react'

export default function CommentId ({ params }: any) {
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  const getCommentById = async (id: string) => {
    try {
      const response = await fetch(`/api/comment/${id}`)
      const { user } = await response.json()
      setPost(user)
    } catch (error) {
      setPost(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCommentById(params.id)
  }, [params.id])

  return (
    <div>
      <p>Comment</p>

      {loading ? (
        <p>Loading...</p>
      ) : post && post !== null && post !== undefined && post ? (
        <div>
          <p>Name: {post.id}</p>
          <p>Email: {post.name}</p>
          <p>Body: {post.age}</p>
        </div>
      ) : (
        <p>No comment found</p>
      )}

      {/* Display other comment data here */}
    </div>
  )
}
