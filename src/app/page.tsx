'use client'

import { Text, Input, Button, Form } from '@strengthUI'
import * as S from './styles'

export default function Home() {
    return (
        <S.Container>
            <S.Wrapper>
                <Text.Heading1 color="dark200">Rafael Agair</Text.Heading1>

                <S.FormContainer
                    onSubmit={(event) => {
                        event.preventDefault()
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
                </S.FormContainer>
            </S.Wrapper>
        </S.Container>
    )
}
