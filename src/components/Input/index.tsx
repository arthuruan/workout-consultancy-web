import { InputHTMLAttributes } from 'react'
import * as S from './styles'
import { ColorVariantsTypes } from '@/styles/theme'

interface InpurSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    value?: string
    error?: string
    variant: ColorVariantsTypes // TODO: change this
    backgroundColor: ColorVariantsTypes
    onValueChange?: (text: string) => void
    onInputFocus?: () => void
    onInputBlur?: () => void
}

export default function Input({
    variant,
    backgroundColor,
    label,
    error,
    ...rest
}: InpurSearchProps) {
    return (
        <S.Container name={label}>
            <S.Label variant={variant} backgroundColor={backgroundColor}>
                {label}
            </S.Label>
            <S.Control asChild>
                <S.Input
                    {...rest}
                    backgroundColor={backgroundColor}
                    variant={variant}
                />
            </S.Control>
            <S.Error match="valueMissing">{error}</S.Error>
        </S.Container>
    )
}
