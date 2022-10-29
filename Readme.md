### TLDR

Attempt #5872046752 at extensible React TS components. [Demo](https://polmoneys.github.io/boost/). 

### Get started 

Components are meant to be used with CSS utility classNames for customization. Let's call a combination of color styles/theme a **surface**. 

```jsx

 <Button
      // adds green bg & 2 units of padding horizontally 
      className="surface -success px $$"
      onClick={() => trayActions.on()}
   >
      <IconCaretUp size="lg" />
   </Button>

```

If you are working at 'design system' level you can always use the primitive and add sugar to it:

```jsx

// @/packages/Button/src/Button.tsx

 const SuccessButton = (props:ButtonProps)=> <Button
      {...props}
     className="surface -success px $$"
   >
      <IconCaretUp size="lg" />
   </Button>

Button.Success = SuccessButton;

```

Some components require more complex **classNames** prop, an Input: 


```jsx

// @/packages/Input/src/Input.tsx

 const HighlightInput = (props:InputProps)=> <Input
      {...props}
      // adds yellow bg & 2 units of padding horizontally 
      classNames={{ input: "surface -highlight px $$" }}
   />

Input.Highlight = HighlightInput;

```

Same idea with Select, Options, Radio, Button and Link components. 

### Add packages

Add a folder under **packages** and configure both **vite.config.ts** and **package.json** to it's own requirements, check other packages for reference. 

```bash

   # install any dependencies this package needs
   yarn install 
   
   # build
   yarn build

```

To use it on **demo** you must add it to **package.json** dependencies and import it on **App.tsx**.

### Author CSS

Write CSS with PostCSS sugar on any folder structure and import all files to **index.css**. A file **css.css** will be created in **/dist** directory.


```bash

   # @/css/

   yarn build

```

Picked tokens (check **postcss.config.cjs**) will be exported as **css-tokens.js** in **dist** folder so that you may consume it as **js**. 

### Tooling

Yarn workspaces template for React TS library & app powered by [vite](https://vitejs.dev/). 

[PostCSS +8](https://cssdb.org/) with [PresetEnv](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) stage **0**. 

### Inspiration 💐

> Our requirements are more modest but at the same time more responsible: 
> buildings, furniture, drinking glasses may well be consumer items that 
> we can destroy without regret after they have served for some short or 
> long period, but while we use them we expect them to fullfill their role and serve us perfectly, so perfectly that we can also derive aesthetic 
> enjoyment from observing them in use. 

Erik Gunnar Asplund on **Swedish Grace**.

### Feedback 

[Twitter](https://twitter.com/polmoneys)
[polmoneys.com](https://polmoneys.com)


