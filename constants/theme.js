import { Dimensions } from "react-native"
const { width, height } = Dimensions.get("window")

export const COLORS = {
    
    primary: "#5EDFFF",
    secondary: "#D6D2D2",
    tertiary: "#263238",
    white: "#FFFFFF",
    blue0: "#1d3f7d",
    blue1: "#4e76b6",
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#F5F7F9",
    lightGray2: '#FAFBFD',
    gray: "#BEC1D2",
    blue: '#42B0FF',
    darkgray: '#898C95',
    yellow: '#FFD573',
    lightBlue: '#95A9B8',
    darkgreen: '#008159',
    peach: '#FF615F',
    purple: '#8e44ad',
    red: '#FF0000',
    ligthClean: '#E0FFFF',
    bgColor: opacity=> `rgba(112, 66, 20, ${opacity})`,
   bgLight: '#d4a574',
   bgDark: '#8c5319',
   text: '#3C2A21',
    layout: 'linear-gradient(180deg, #42B0FF 0%, #1d3f7d 100%)',
}

export const SIZES = {
    // GLOBAL SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS SIZES
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // APP DIMENSIONS
    width,
    height
}

export const FONTS = {
    largeTitle: {
        fontFamily: 'black',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },

    largeTitle: { fontFamily: "bold", fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: { fontFamily: "bold", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "bold", fontSize: SIZES.h4, lineHeight: 20},
    body1: { fontFamily: "regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "regular", fontSize: SIZES.body4, lineHeight: 20}

}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme