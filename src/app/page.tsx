import { Text, Button, Input } from '@strengthUI'

export default function Home() {
    return (
        <main
            style={{
                display: 'flex',
            }}
        >
            <Text.Heading1 color="light">Hello World</Text.Heading1>
            <Button variant="gray">Button test</Button>
            <Input label="Email" error="error" />
        </main>
    )
}
