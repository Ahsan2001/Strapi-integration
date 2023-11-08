

import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import { Footer, Header } from '@/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={`container mx-auto px-4 ${roboto.className}`}>
          <Header />
            <main>
                {children}
            </main>
          <Footer />
        </body>
      </html>    
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >
  )
}
