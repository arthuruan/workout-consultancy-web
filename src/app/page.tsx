'use client'

import { Input, Button, Form } from '@strengthUI'
import * as S from './styles'
import Image from 'next/image'
import LogoImage from '../assets/logo-1.png'

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
                        style={{ width: '80%', height: 'auto' }}
                        alt="logo-1"
                    />
                    <Form.Root
                        onSubmit={(event) => {
                            event.preventDefault()
                        }}
                        style={{
                            width: '100%',
                            marginTop: 10,
                        }}
                    >
                        <Input
                            label="Email"
                            variant="dark"
                            backgroundColor="light"
                        />
                        <Input
                            label="Password"
                            variant="dark"
                            backgroundColor="light"
                            error="Mensagem de erro"
                            type="password"
                        />
                        <Form.Submit asChild>
                            <Button
                                style={{
                                    marginTop: 80,
                                }}
                                variant="primary"
                                backgroundColor="light"
                            >
                                Entrar
                            </Button>
                        </Form.Submit>
                    </Form.Root>
                </S.WrapperForm>
            </S.Wrapper>
        </S.Container>
    )
}
