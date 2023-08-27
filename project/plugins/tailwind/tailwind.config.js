tailwind.config = {
  darkMode:'class',
  theme: {
    extend: {
      lineHeight: {
        '13': '133.4%',
      },
      dropShadow: {
        '3xl': '0px 10px 22px 0px rgba(147, 117, 81, 1)',
        '2xl': '1px 2px 4px 0px rgba(112, 192, 91, 0.20)',
      },
        boxShadow: {
          '3xl': '1px 2px 4px 0px rgba(0, 0, 0, 0.10)',
          '4xl': '4px 8px 16px 0px rgba(255, 102, 51, 0.20)',
          '5xl': '4px 80px 16px 0px rgba(112, 192, 91, 0.20)',
        }
    },
    container: {
      padding: {
        DEFAULT: '0.7rem',
        sm: '0.9rem',
        lg: '1rem',
        xl: '5rem',
      },
      center: 'true',
    },
    screens: {
      'xs': '480px', 
      'sm': '640px', 
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px', 
    },
      colors: {
        white: '#ffffff',
        currentBlue: '#19242F',
        gold: '#DBC08D',
        lightBlue: '#19242F',
    },
  },
};


