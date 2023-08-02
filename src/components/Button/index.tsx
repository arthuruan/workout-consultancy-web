import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
import { ColorVariantsTypes } from '@/styles/theme'

type Variants = 'primary' | 'light' | 'gray'
type Size = 'normal' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants
    backgroundColor?: ColorVariantsTypes
    size?: Size
}

type InnerProps = {
    color: ColorVariantsTypes
}

export default function Button({
    children,
    variant,
    backgroundColor,
    ...rest
}: ButtonProps) {
    let innerProps: InnerProps = {
        color: 'primary',
    }

    switch (variant) {
        case 'primary':
            innerProps = {
                color: 'primary',
            }
            break
        case 'light':
            innerProps = {
                color: 'light',
            }
            break
        case 'gray':
            innerProps = {
                color: 'dark200',
            }
            break
        default:
            break
    }

    return (
        <S.Button
            variant={innerProps.color}
            backgroundColor={backgroundColor}
            {...rest}
        >
            {children}
        </S.Button>
    )
}
