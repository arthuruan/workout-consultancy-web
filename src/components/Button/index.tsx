import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type Variants = 'primary' | 'secundary'
type Size = 'normal' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants
    size?: Size
}

export default function Button({ children, ...rest }: ButtonProps) {
    return <Container {...rest}>{children}</Container>
}
