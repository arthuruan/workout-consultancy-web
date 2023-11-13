'use client'

import { styled } from 'styled-components'
import { Button as UIButton } from '@strengthUI'

export const Container = styled.main`
    display: flex;
    height: 100vh;
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.light};
    width: 45%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const WrapperForm = styled.div`
    width: 30vw;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Button = styled(UIButton)`
    margin-top: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
