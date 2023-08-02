import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/register'
import { Providers } from './providers'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
    title: 'Rafael Agiar',
    description: 'Consultoria de Treino Online',
}

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
