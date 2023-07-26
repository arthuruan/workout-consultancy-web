// 'use client'

import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/register'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { Providers } from './providers'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Rafael Agiar',
    description: 'Consultoria de Treino Online',
}
