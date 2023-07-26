'use client'

import styled from 'styled-components'

import { ColorVariantsTypes } from '@/styles/theme'

export interface StyledColorProps {
    color: ColorVariantsTypes
}

export const Heading1 = styled.h1<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: normal;
    font-size: 55px;
    line-height: 66px;
`

export const Heading2 = styled.h2<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
`

export const BodyLight = styled.p<StyledColorProps>`
    /* color: ${({ theme, color }) => theme.colors[color]}; */
    font-family: Inter;
    color: black;
`

export const BodySemiBold = styled(BodyLight)`
    font-weight: 600;
`

export const Caption1 = styled.p<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
`

export const Caption2 = styled.label<StyledColorProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-style: normal;
    font-weight: normal;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
`
