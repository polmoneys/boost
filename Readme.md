### TLDR

Attempt #5872046752 at extensible React TS components. [Demo](https://polmoneys.github.io/boost/). 

### Get started 

Fork and play:

```<Button>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Button/get-started.md),```<Card>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Card/get-started.md),```<Checkbox>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Checkbox/get-started.md),```<Dialog>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Dialog/get-started.md),```<Fence>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Fence/get-started.md),```<Font>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Font/get-started.md),```<Group>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Group/get-started.md),```<Icon>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Icon/get-started.md),```<Input>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Input/get-started.md),```<Layers>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Layers/get-started.md), ```<Link>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Link/get-started.md), ```<List>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/List/get-started.md), ```<Move>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Move/get-started.md), ```<Options>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Options/get-started.md), ```<Pic>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Pic/get-started.md), ```<Popover>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Popover/get-started.md), ```<Radio>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Radio/get-started.md), ```<Range>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Range/get-started.md), ```<ScrollUnit>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/ScrollUnit/get-started.md), ```<Shape>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Shape/get-started.md), ```<Stat>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Stat/get-started.md), ```<Sticky>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Sticky/get-started.md), ```<Switch>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Switch/get-started.md), ```<Textarea>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Textarea/get-started.md), ```<Track>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Track/get-started.md), ```<Trap>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Trap/get-started.md), ```<Unit>``` [docs](https://github.com/polmoneys/boost/tree/master/packages/Unit/get-started.md). 


### Overview

Components are meant to be used with CSS utility classNames for customization. 


```jsx


 <Button
      // adds theme & 2 units of padding horizontally 
      className="success px $$"
      onClick={() => trayActions.on()}
   >
     Show tray
   </Button>


```

If you are working at 'design system' level you can always use the primitive and add sugar to it, like:


```jsx


// @/packages/Button/src/Button.tsx

 const SuccessButton = (props:ButtonProps)=> <Button
      {...props}
     className="success px $$"
   />
    

Button.Success = SuccessButton;


```


Some components require more complex **classNames** prop, an Input: 


```jsx

// @/packages/Input/src/Input.tsx

 const AccentInput = (props:InputProps)=> <Input
      {...props}
      classNames={{ input: "accent px $$" }}
   />

Input.Accent = AccentInput;


```


### Add packages


Add a folder under **packages** and configure both **vite.config.ts** and **package.json** to it's own requirements, check other packages for reference. 


```bash


   # install any dependencies this package needs
   yarn install 
   
   # build
   yarn build


```


To use, add it to [package.json](https://github.com/polmoneys/boost/blob/master/demo/package.json) dependencies.


### Add hooks


Add hook on folder [hooks/src](https://github.com/polmoneys/boost/blob/master/hooks/src) and import/export it to/from **src/index.ts**. 


### Author CSS


Write CSS with PostCSS sugar on any folder structure and import all files to **index.css**. A file **css.css** will be created in **/dist** directory.



```bash


   # @/css/

   yarn build


```

[Get started](https://github.com/polmoneys/boost/blob/master/css/get-started.md).


### Developer Experience


You can always re-export all packages from a single export and make components more specific with built-in styles to improve **DX**.

Folder [styled](https://github.com/polmoneys/boost/blob/master/styled/src/index.ts) shows how.


### Tooling


Yarn workspaces template for React TS library & app powered by [vite](https://vitejs.dev/). 

[PostCSS +8](https://cssdb.org/) with [PresetEnv](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) stage **0**. 


### Roadmap 

- [ ] improve export **types** & **css** from Packages && script after **yarn build** of a Package to trigger **yarn build** on ```css```folder
- [ ] add sortable to **packages/Move**
- [ ] add more hooks demos: **useUrlParams, useAttachStylesheet, useMenu...**
- [ ] publish **packages/ArtDirection**

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


