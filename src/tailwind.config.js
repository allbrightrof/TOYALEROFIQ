Module.exports = {
    content: ['./*.html'],
    theme: {
        screens: {
           sm: '480px',
           md: '768',
           lg: '976px',
           xl:'1440px'
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
          },
        extend: {
            colors:{
                brightRed: 'hsl()'
            }
        },
    },
    plugins: [],
}