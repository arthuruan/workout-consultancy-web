'use client'

import { styled } from 'styled-components'

export const Nav = styled.nav`
    max-height: 100%;

    background-color: ${({ theme }) => theme.colors.light};

    margin: 40px;
    border-radius: 16px;
    padding: 24px;

    box-shadow: 12px 12px 0px 0px #e9e9e9;
`
