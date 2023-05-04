import { Roboto } from 'next/font/google'
import '../styles/globals.css'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'BloodPlus',
  description: 'Aplicación Web para Conectar Donadores Cercanos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
