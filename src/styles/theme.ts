export const colors = {
    transparent: 'transparent',
    dark: 'black',
}

export type ColorVariantsTypes = keyof typeof colors

const theme = {
    colors,
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    },
} as const

export default theme
