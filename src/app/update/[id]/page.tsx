async function getUpDateById ({ params, searchParams }: any) {
  try {
    const id = params.id
    const response = await fetch(`${process.env.URL}/api/comment/${id}`)
    const { user } = await response.json()

    if (!user) {
      console.error('Post not found')
    }
    return {
      user,
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
  const { user } = await getUpDateById({ params, searchParams })
  return (
    <div>
      page
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>
      ) : (
        <div>
          <h1>Post not found</h1>
        </div>
      )}
    </div>
  )
}
