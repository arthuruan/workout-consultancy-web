import { styled } from '@/styles'

const Button = styled('button', {
    backgroundColor: '$strength300',
})

export default function Home() {
    return (
        <main>
            <Button>Login</Button>
            <h1>Hello</h1>
        </main>
    )
}
