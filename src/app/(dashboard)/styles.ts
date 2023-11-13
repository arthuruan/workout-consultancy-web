'use client'

import { styled } from 'styled-components'

export const Container = styled.body`
    display: flex;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.dark500};
`

export const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    width: 100%;
`
