import { createGlobalStyle } from 'styled-components';
 
export const viewSizes = Object.freeze({
	mobile: 420,
	tablet: 720,
	desktop: 1024,
})

export const getViewSize = (width) => {
  if (width <= viewSizes.mobile) {
    return viewSizes.mobile;
  }
  if (width <= viewSizes.tablet) {
    return viewSizes.tablet;
  }

  return viewSizes.desktop
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    max-width: 100%;
  }
`
 
export default GlobalStyle;