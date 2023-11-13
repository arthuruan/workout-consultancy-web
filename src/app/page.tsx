'use client'

import { InputForm, Form } from '@strengthUI'
import * as S from './styles'
import Image from 'next/image'
import LogoImage from '../assets/logo-1.png'
import ArrowFowardIcon from '../assets/icons/arrow-forward.svg'

export default function Home() {
    return (
        <S.Container>
            <S.Wrapper>
                <S.WrapperForm>
                    <Image
                        src={LogoImage.src}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="logo-1"
                    />
                    <Form.Root
                        onSubmit={(event) => {
                            event.preventDefault()
                        }}
                        style={{
                            width: '100%',
                        }}
                    >
                        <InputForm
                            label="Email"
                            variant="dark"
                            backgroundColor="light"
                        />
                        <InputForm
                            label="Password"
                            variant="dark"
                            backgroundColor="light"
                            error="Mensagem de erro"
                            usePassword
                        />
                        <Form.Submit asChild>
                            <S.Button
                                style={{
                                    marginTop: 80,
                                }}
                                variant="primary"
                                backgroundColor="light"
                            >
                                Entrar
                                <ArrowFowardIcon />
                            </S.Button>
                        </Form.Submit>
                    </Form.Root>
                </S.WrapperForm>
            </S.Wrapper>
        </S.Container>
    )
}
