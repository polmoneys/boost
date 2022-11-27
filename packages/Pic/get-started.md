## CardMedia

Low-fi **image** component. 


```tsx


interface Props {
  alt: string;
  src: string;
  height?: string;
  sources?: Dictionary;
  eager?: boolean;
  DONOTUse?: {
    DONOTStyle: Dictionary;
  };
}


```


## Usage


```jsx

 
<Card as="article" ratio="landscape">
   <h2>Card Title</h2>
   <Card.Media
      src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      height="100%"
      alt=""
   />
</Card>


```
