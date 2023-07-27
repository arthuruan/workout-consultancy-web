'use client'

import { ColorVariantsTypes } from '@/styles/theme'
import { styled } from 'styled-components'

export interface StyledColorProps {
    variant: ColorVariantsTypes
}

export const Container = styled.button<StyledColorProps>`
    background-color: transparent;
    padding: 14px 18px;

    border: 3px solid ${({ theme, variant }) => theme.colors[variant]};
    border-radius: 14px;

    box-shadow: 6px 6px 0px 0px ${({ theme, variant }) => theme.colors[variant]};

    text-transform: uppercase;
    color: ${({ theme, variant }) => theme.colors[variant]};

    height: fit-content;
    width: fit-content;
`
