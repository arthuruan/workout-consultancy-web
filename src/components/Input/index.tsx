import { InputHTMLAttributes } from 'react'
import Text from '../Text'
import { Container, Error } from './styles'

interface InpurSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    value?: string
    error?: string
    onValueChange?: (text: string) => void
    onInputFocus?: () => void
    onInputBlur?: () => void
}

export default function Input({ label, error, ...rest }: InpurSearchProps) {
    return (
        <Container>
            {label && <Text.Caption1 color="light">{label}</Text.Caption1>}
            <input {...rest} type="text" />
            {error && <Error color="red">{label}</Error>}
        </Container>
    )
}
