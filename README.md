# useRef

**`useRef` is an amazing feature which gives you access you in parent component all the `states` and `methods` of `child` component no mather in which level.**

in this project I am calling a function and changin state of a `child` component from a `parent` component using `ref`

## test 1

in here we have a `UserName` component which we can change the username from outside it's component, as you will see in this example, I want to call a function inside child compoent from parent component and change some state in child component from parent component, so I have to use `useRef` to handle this functionaliy.



 ## test 2
 
```js
import React, { useState, useEffect, useRef } from 'react';

function RefComponent() {
   const [stateNumber, setStateNumber] = useState(0);
   const numRef = useRef(0);
   
   function incrementAndDelayLogging() {
      setStateNumber(stateNumber + 1);
      numRef.current++;
      setTimeout(() => {
        alert(`state: ${stateNumber} | ref: ${numRef.current}`)
      }, [1000])
   }
   
   return (
      <div>
        <h1>useRef example</h1>
        <button onClick={incrementAndDelayLogging}>delay logging</button>
        <h4>state: {stateNumber}</h4>
        <h4>ref: {numRef.current}</h4>
      </div>
   )
}
```

Now, if you run this code, you will see that in the render, `stateNumber` would be `1` and `ref` would be `1`, but in the log, the `stateNumber` would be `0` and `ref` would be `1`

why this happens:

actually this is a problem with the `closure` because the closure hold the previous version of the stateNumber, but `numRef.current` that's always going to be the exact momnet in time. so `useRef` is so useful, if you have a problem with multiple closure, you can use useRef.

### What useRef does?

what `useRef` does, is that, it gives us an object, and this object has exactly one thing in it called `current`

it means if you write 

```js
numRef.somethingElse = 5;  // this will give us an error
```

but if you write

```js
numRef.current = 5; // it would work correctly
```


## Another useful example of `useRef` (Question)

What will be rendered in the browser and what will be logged in the console, and why?

```js
const App = () => {
  const ref = React.useRef(0);
  
  React.useEffect(() => {
    setInterval(() => {
      console.log(ref.current);
      ref.current = ref.current + 1;
    }, 1000)
  }, []);
  
  return <span>ref: {ref.current}</span>
}
```


**Answer: ** => `'ref' will be incrementing in console.log() only, browser will always say 0`

**Why? ** => `because changing ref does not make a re-render in the component just changing the current value of the ref object`

