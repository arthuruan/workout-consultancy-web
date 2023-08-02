'use client'

import { ColorVariantsTypes } from '@/styles/theme'
import styled from 'styled-components'

export interface StyledColorProps {
    variant: ColorVariantsTypes
    backgroundColor?: ColorVariantsTypes
}

export const Button = styled.button<StyledColorProps>`
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor || 'dark500']};
    padding: 0 18px;

    border: 3.5px solid ${({ theme, variant }) => theme.colors[variant]};
    border-radius: 14px;

    box-shadow: 6px 6px 0px 0px ${({ theme, variant }) => theme.colors[variant]};

    text-transform: uppercase;
    color: ${({ theme, variant }) => theme.colors[variant]};

    height: 3.7rem;
    width: 100%;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;

    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`
