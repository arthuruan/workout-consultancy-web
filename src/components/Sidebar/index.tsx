'use client'

import * as S from './styled'
import LogoImage from '@/assets/logo-1.png'
import Image from 'next/image'
import MainNav from '../MainNav'

export default function Sidebar() {
    return (
        <S.Nav>
            <Image
                src={LogoImage.src}
                width={0}
                height={0}
                sizes="20vw"
                style={{ width: '100%', height: 'auto' }}
                alt="logo-1"
            />
            <MainNav />
        </S.Nav>
    )
}
