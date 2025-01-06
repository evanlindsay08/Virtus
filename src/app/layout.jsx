import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ventra',
  description: 'Redefining The Deployment Of AI Agents',
  icons: {
    icon: '/ventrafavicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 