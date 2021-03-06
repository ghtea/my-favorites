import { createGlobalStyle, ThemedStyledProps } from 'styled-components';

import { normalize } from 'styled-normalize'
import all from './default/all';

import a from './default/a';
import body from './default/body';
import button from './default/button';
import div from './default/div';
import heading from './default/heading';
import img from './default/img';
import input from './default/input';
import layout from './default/layout';
import list from './default/list';
import span from './default/span';
import table from './default/table';
import textarea from './default/textarea';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  ${all}

  ${a}
  ${body}
  ${button}
  ${div}
  ${heading}
  ${img}
  ${input}
  ${layout}
  ${list}

  ${span}
  ${table}
  ${textarea}
`;

//export type Props = Record<'theme', typeof themeDict.light>;

// https://www.tutorialrepublic.com/html-reference/html5-tags.php // HTML 5 태그들 참고
