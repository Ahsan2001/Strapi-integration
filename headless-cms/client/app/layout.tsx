import { Roboto } from 'next/font/google'
import '../utils/globals.css'
import { Footer, Header } from '@/components'


const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <html lang="en">
        <body className={`container mx-auto px-4 ${roboto.className}`}>
          <Header />
            <main>
                {children}
            </main>
          <Footer />
        </body>
      </html>    
  )
}



