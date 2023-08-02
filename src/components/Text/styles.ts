'use client'

import styled from 'styled-components'

import { ColorVariantsTypes } from '@/styles/theme'

export interface StyledColorProps {
    color: ColorVariantsTypes
}

export const Heading1 = styled.h1<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 66px;
`

export const Heading2 = styled.h2<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 30px;
`

export const BodySemiBold = styled.p<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`

export const BodyBold = styled(BodySemiBold)`
    font-weight: 700;
`

export const Caption1 = styled.p<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
`

export const Caption2 = styled.label<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 11px;
`
