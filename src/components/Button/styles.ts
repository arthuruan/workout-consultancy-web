'use client'
import { styled } from 'styled-components'

export const Container = styled.button`
    background-color: transparent;
    padding: 14px 18px;

    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: 14px;

    box-shadow: 6px 6px 0px 0px ${({ theme }) => theme.colors.primary};

    font-weight: bold;
    font-size: 16px;

    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    white-space: nowrap;
`
