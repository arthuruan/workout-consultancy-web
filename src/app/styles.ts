'use client'

import { Form } from '@strengthUI'
import { styled } from 'styled-components'

export const Container = styled.main`
    display: flex;
    height: 100%;
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.light};
    width: 45%;

    padding: 0 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FormContainer = styled(Form.Root)`
    width: 70%;
`
