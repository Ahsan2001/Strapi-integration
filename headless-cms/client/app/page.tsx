import { Tabs } from '@/components';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Home page Testing',
  description: 'description testing ahsan',
}


export default async function Home() {

  

  return (
    <>

      <h1 className="text-primaryDark" > Ahsan </h1>
      <Tabs />  
    </>
  )
}
