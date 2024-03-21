import { NextResponse } from 'next/server'
import data from '@/data.json'

export async function GET (request: Request, ctx: any) {
  const { params } = ctx
  const user = data.find(x => params.id.toString() === x.id.toString())

  return NextResponse.json({
    user
  })
}
