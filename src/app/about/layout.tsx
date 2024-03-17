'use client'
export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='bg-indigo-500 '>
      <header>this is about header</header>
      {children}
    </div>
  )
}
