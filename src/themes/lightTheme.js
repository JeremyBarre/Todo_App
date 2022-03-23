const defaultTheme = {
  colors: {
    primary: 'red',
    background: 'white',
  },
  images: {
    background: require('../assets/background.png')
  },
};

  export const lightTheme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
    },
    ...defaultTheme,
    images: {
      ...defaultTheme.images,
    },
};
  
export const darkTheme = {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "blue",
      background: "black",
    },
    ...defaultTheme,
    images: {
      ...defaultTheme.images,
      background: require('../assets/background-dark.png'),
    },
  };