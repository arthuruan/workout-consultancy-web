import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',

            strength300: '#F16D1A',
        },
        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
    },
})
