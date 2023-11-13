'use client'

import * as S from './styles'
import { Sidebar } from '@strengthUI'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <S.Container>
            <Sidebar />
            <S.Body>{children}</S.Body>
        </S.Container>
    )
}
