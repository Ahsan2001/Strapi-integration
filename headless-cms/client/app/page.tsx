import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Home page Testing',
  description: 'description testing ahsan',
}

export default function Home() {
  return (
      <h1 className="text-primaryDark ">Hello Ahsan</h1>
  )
}
