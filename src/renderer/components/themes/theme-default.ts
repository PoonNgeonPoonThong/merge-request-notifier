export const defaultTheme = {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [10, 12, 14, 16, 24],
    colors: {
        defaultBackground: '#f5f5f5',
        siteBackground: '#f5f5f5',
        lightBackground: '#ffffff',
        lightgray: '#f6f6ff',
        gray: '#a7a7aa',
        shadow: '#d2d2da',

        textColor: '#212121',
        textColorTinted: '#6d6d66',
        linkColor: '#0000ee',
        buttonText: '#000',

        blue: '#192CFD',
        primary: '#192CFD',
        primaryDarkened: '#091CED',
        green: '#1fad56',
        red: '#FC3D53',
        lightred: '#ffeaea',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
        body: 'IBM Plex Mono',
        heading: 'inherit',
        monospace: 'IBM Plex Mono',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    shadows: {
        small: '0 0 4px rgba(0, 0, 0, .125)',
        large: '0 0 24px rgba(0, 0, 0, .125)',
    },
    variants: {
        avatar: {
            borderRadius: '50%',
            width: '2.25rem',
            height: '2.25rem',
        },
        barGradient: {
            backgroundColor: 'lightBackground',
            backgroundImage: 'linear-gradient(lightBackground, #d2d2da4f)',
        },
    },
    text: {
        uppercase: {
            textTransform: 'uppercase',
        },
    },
    buttons: {
        primary: {
            backgroundColor: 'primary',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 1,
            ':hover': {
                backgroundColor: 'primaryDarkened',
            },
            ':focus': {
                textDecoration: 'underline',
            },
        },
        secondary: {
            backgroundColor: 'lightgray',
            border: '1px solid',
            borderColor: 'gray',
            color: 'buttonText',
            fontSize: 1,
            ':hover': {
                backgroundColor: 'lightBackground',
            },
            ':focus': {
                textDecoration: 'underline',
            },
        },
        danger: {
            backgroundColor: 'red',
            color: 'buttonText',
            fontWeight: 'bold',
            fontSize: 1,
        },
    },
}
