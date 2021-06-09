// import original module declarations
import 'styled-components';

type eachColorDict = {
  body?: string;

  s0: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
  s10: string;
};

// and extend them!
declare module 'styled-components' {
  export interface Theme {
    name: string;

    media: {
      min: 360;
      sm: 600;
      md: 960;
      lg: 1264;
      xl: 1904;
    };

    color: {
      basic: eachColorDict;
      main: eachColorDict;
      sub: eachColorDict;

      success: eachColorDict;
      hint: eachColorDict;
      warning: eachColorDict;
      error: eachColorDict;
    };
  }
}
