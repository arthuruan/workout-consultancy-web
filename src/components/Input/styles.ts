'use client'

// import { ColorVariantsTypes } from '@/styles/theme'
import { styled } from 'styled-components'
import Text from '../Text'

interface ContainerProps {
    // variant: ColorVariantsTypes
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    padding-top: 14px;

    width: 50%;
    display: flex;
    flex-direction: column;

    input {
        background-color: transparent;
        padding: 14px 18px;

        border: 3px solid ${({ theme }) => theme.colors.light};
        border-radius: 14px;

        box-shadow: 6px 6px 0px 0px ${({ theme }) => theme.colors.light};

        color: ${({ theme }) => theme.colors.light};

        font-size: 16px;
        margin-top: 8px;
    }
`

export const Error = styled(Text.Caption2)`
    margin-top: 8px;
`
