//import { basic, main, sub, success, hint, warning, error } from './bu-color';
//import { Theme } from 'styled-components';
//import { Theme } from "theme-ui";
import * as Rebass from "rebass/styled-components";

type Variants = Record<string, Record<string, Rebass.SxStyleProp> >;

export const lightTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
     heading: 1.125,
  },
  colors: {
    background: "#F7F9FC",
    frontground: "#ffffff",

    basic: "#111",

    primary: "#2A44EC",
    secondary: "#30c", 
  },
  // variants: {
  //   button: {
  //     normal: {
  //       p: 2,
  //       bg: '#ffffff',
  //       boxShadow: 'card',
  //       borderRadius: 2,
        
  //     },
  //     outline: {  
  //       bg: 'transparent',
  //       boxShadow: 'card',
  //       borderRadius: 2,
  //     },
  //     primary: {
  //       bg: 'background',
  //       boxShadow: 'card',
  //       borderRadius: 2,
  //     },

  //   }
    
    
  // } as Variants,

  // styles: {
  //   root: {
  //     fontFamily: "body",
  //     lineHeight: "body",
  //     fontWeight: "body",
  //   },
  //   h1: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 5,
  //   },
  //   h2: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 4,
  //   },
  //   h3: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 3,
  //   },
  //   h4: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 2,
  //   },
  //   h5: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 1,
  //   },
  //   h6: {
  //     color: "text",
  //     fontFamily: "heading",
  //     lineHeight: "heading",
  //     fontWeight: "heading",
  //     fontSize: 0,
  //   },
  //   p: {
  //     color: "text",
  //     fontFamily: "body",
  //     fontWeight: "body",
  //     lineHeight: "body",
  //   },
  //   a: {
  //     color: "primary",
  //   },
  //   pre: {
  //     fontFamily: "monospace",
  //     overflowX: "auto",
  //     code: {
  //       color: "inherit",
  //     },
  //   },
  //   code: {
  //     fontFamily: "monospace",
  //     fontSize: "inherit",
  //   },
  //   table: {
  //     width: "100%",
  //     borderCollapse: "separate",
  //     borderSpacing: 0,
  //   },
  //   th: {
  //     textAlign: "left",
  //   },
  //   td: {
  //     textAlign: "left",
  //   },
  //   img: {
  //     maxWidth: "100%",
  //   },
  // },
};

// const lightColors = {
//   basic: basic.light,
//   main: main.light,
//   sub: sub.light,

//   success: success.light,
//   hint: hint.light,
//   warning: warning.light,
//   error: error.light,
// };

// // 다크 모드 지원한다면
// const darkColors: typeof lightColors = {
//   basic: basic.dark,
//   main: main.dark,
//   sub: sub.dark,

//   success: success.dark,
//   hint: hint.dark,
//   warning: warning.dark,
//   error: error.dark,
// }

// export const lightTheme: Theme = {
//   ...commonPart,
//   colors: {
//     background: "#F7F9FC",
//     frontground: "#ffffff",

//     text: "#111",

//     primary: "#2A44EC",
//     secondary: "#30c", 
//   },
// };

// export const darkTheme: Theme = {
//   ...commonPart,
//   colors: {
//     basic: "#000",
//     primary: "#07c",
//     secondary: "#30c",
//   },
// };
