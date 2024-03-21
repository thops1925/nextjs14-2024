async function getUpDateById ({ params, searchParams }: any) {
  try {
    const id = params.id
    const response = await fetch(`${process.env.URL}/api/comment/${id}`)
    const data = await response.json()

    if (!data) {
      console.error('Post not found')
    }
    return {
      data,
      status: response.status
    }
  } catch (error) {
    console.error(error)
    return {
      error
    }
    // throw error
  }
}

export default async function UpdateId ({ params, searchParams }: any) {
  const { data } = await getUpDateById({ params, searchParams })
  return (
    <div>
      page
      <h1>{data.user.name}</h1>
      <h1>{data.user.age}</h1>
    </div>
  )
}
