'use client'

import { styled } from 'styled-components'

export const Container = styled.main`
    background-color: ${({ theme }) => theme.colors.red};

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
