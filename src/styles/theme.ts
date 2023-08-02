export const colors = {
    primary: '#F16D1A',

    red: '#FD4A4A',

    light: '#FFFFFF',
    dark: '#111111',

    dark500: '#101010',
    dark400: '#171717',
    dark300: '#1E1E1E',
    dark200: '#9AA0A6',
    dark100: '#E9E9E9',
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
