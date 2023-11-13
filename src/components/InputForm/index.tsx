import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'
import { ColorVariantsTypes } from '@/styles/theme'
import VisibilityOffIcon from '../../assets/icons/visibility-off.svg'
import VisibilityOnIcon from '../../assets/icons/visibility-on.svg'

interface InpurSearchProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    value?: string
    error?: string
    variant: ColorVariantsTypes // TODO: change this
    backgroundColor: ColorVariantsTypes
    usePassword?: boolean
    onValueChange?: (text: string) => void
    onInputFocus?: () => void
    onInputBlur?: () => void
}

export default function InputForm({
    variant,
    backgroundColor,
    label,
    error,
    usePassword = false,
    ...rest
}: InpurSearchProps) {
    const [hidePassword, setHidePassword] = useState<boolean>(true)

    return (
        <S.Container name={label}>
            <S.Label variant={variant} backgroundColor={backgroundColor}>
                {label}
            </S.Label>
            <S.InputContainer
                backgroundColor={backgroundColor}
                variant={variant}
            >
                <S.Control asChild>
                    <S.Input
                        {...rest}
                        backgroundColor={backgroundColor}
                        variant={variant}
                        type={
                            usePassword
                                ? hidePassword
                                    ? 'password'
                                    : 'text'
                                : 'text'
                        }
                    />
                </S.Control>
                {usePassword && (
                    <S.Button onClick={() => setHidePassword(!hidePassword)}>
                        {hidePassword ? (
                            <VisibilityOffIcon />
                        ) : (
                            <VisibilityOnIcon />
                        )}
                    </S.Button>
                )}
            </S.InputContainer>
            <S.Error match="valueMissing">{error}</S.Error>
        </S.Container>
    )
}
