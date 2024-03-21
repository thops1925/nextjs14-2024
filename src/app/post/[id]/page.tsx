import { Metadata } from 'next'
interface Post {
  id: number
  title: string
  description: string
}

type Props = {
  params: { id: string }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  try {
    const postId = params.id
    const response = await fetch(`${process.env.url}/api/post/${postId}`)
    const post: Post = await response.json()

    if (!post) {
      console.error('Post not found')
      return {
        title: 'Error',
        description: 'Post not found'
      }
    }

    return {
      title: post.title,
      description: post.description
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return {
      title: 'Error',
      description: 'An error occurred while fetching the post'
    }
  }
}
const PostID = ({ params }: any) => {
  return <div>PostID {params.id}</div>
}
export default PostID
