import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'
import Text from '../Text'
import { ColorVariantsTypes } from '@/styles/theme'

type Variants = 'primary' | 'light' | 'gray'
type Size = 'normal' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants
    size?: Size
}

type InnerProps = {
    color: ColorVariantsTypes
}

export default function Button({ children, variant, ...rest }: ButtonProps) {
    let innerProps: InnerProps = {
        color: 'primary',
    }

    switch (variant) {
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
        <Container colorVariant={innerProps.color} {...rest}>
            <Text.BodyBold color={innerProps.color}>{children}</Text.BodyBold>
        </Container>
    )
}
