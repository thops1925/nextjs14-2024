import { NextResponse } from 'next/server'
import data from '@/data.json'

export async function GET (request: Request, context: any) {
  const { params } = context

  console.log(params)
  const user = data.filter(x => params.userID.toString() === x.id.toString())

  // const data = await request.json()
  return NextResponse.json({
    user
  })
}
