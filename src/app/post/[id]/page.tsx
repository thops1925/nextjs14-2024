import { Metadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id
  // fetch data
  const product = await fetch(`${process.env.url}/api/post/${id}`).then(res =>
    res.json()
  )
  return {
    title: product.title,
    description: product.description
  }
}

const PostID = ({ params }: any) => {
  return <div>PostID {params.id}</div>
}

export default PostID
