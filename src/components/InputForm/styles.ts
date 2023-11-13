'use client'

import { ColorVariantsTypes } from '@/styles/theme'
import styled from 'styled-components'
import * as Form from '@radix-ui/react-form'

interface VariantProps {
    variant: ColorVariantsTypes
    backgroundColor: ColorVariantsTypes
}

export const Container = styled(Form.Field)`
    padding-top: 14px;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    position: relative;
`

export const Control = styled(Form.Control)``

export const InputContainer = styled.div<VariantProps>`
    padding: 0 20px;
    border: 3.5px solid ${({ theme, variant }) => theme.colors[variant]};
    border-radius: 14px;

    box-shadow: 6px 6px 0px 0px ${({ theme, variant }) => theme.colors[variant]};

    display: flex;
`

export const Input = styled.input<VariantProps>`
    border: 0;
    height: 3.7rem;
    width: 100%;

    color: ${({ theme, variant }) => theme.colors[variant]};
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor]};

    font-size: 18px;
`

export const Label = styled(Form.Label)<VariantProps>`
    font-style: normal;
    font-size: 14px;
    font-weight: 600;

    color: ${({ theme, variant }) => theme.colors[variant]};
    background-color: ${({ theme, backgroundColor }) =>
        theme.colors[backgroundColor]};

    padding: 0 6px;

    position: absolute;
    left: 1rem;
    top: 0.5rem;
`

export const Error = styled(Form.Message)`
    margin-top: 10px;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.red};
`

export const Button = styled.button`
    border: 0;
    background: none;

    display: flex;
    align-items: center;
    justify-content: center;
`
