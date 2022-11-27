## CSS


Fill with your design system [tokens](https://github.com/polmoneys/boost/tree/master/theme/_tokens.css). 

Configure CSS your want to concatenate in [index.css](https://github.com/polmoneys/boost/tree/master/css/index.css). 


```bash


   yarn build


```

Picked tokens on [postcss.config.cjs](https://github.com/polmoneys/boost/tree/master/css/postcss.config.cjs) will be exported as **css-tokens.js** in **dist** folder so that you may consume values in **js**. 