import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: 'Wulu',
  description: 'The ultimate anime platform.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
