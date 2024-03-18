import { NextResponse } from 'next/server'

const posts: any = [
  {
    id: 12,
    title: 'thopz',
    description: 'website'
  }
]

export async function GET (request: Request, ctx: any) {
  const { params } = ctx

  const post = posts.find((x: any) => x.id.toString() === params.id.toString())

  if (!post) {
    // Handle the case when post is not found
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }

  return NextResponse.json(post)
}
