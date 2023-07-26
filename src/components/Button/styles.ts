'use client'

import { ColorVariantsTypes } from '@/styles/theme'
import { styled } from 'styled-components'

export interface StyledColorProps {
    colorVariant: ColorVariantsTypes
}

export const Container = styled.button<StyledColorProps>`
    background-color: transparent;
    padding: 14px 18px;

    border: 3px solid ${({ theme, colorVariant }) => theme.colors[colorVariant]};
    border-radius: 14px;

    box-shadow: 6px 6px 0px 0px
        ${({ theme, colorVariant }) => theme.colors[colorVariant]};

    text-transform: uppercase;
    color: ${({ theme, colorVariant }) => theme.colors[colorVariant]};

    white-space: nowrap;
`
