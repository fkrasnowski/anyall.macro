# anyall.macro

A Babel macro making multiple value comparison easy

## Instalation

```sh
npm i --save-dev anyall.macro
```

Or if using yarn:

```sh
yarn add --dev anyall.macro
```

Then just `import`:

```js
import { any, all } from 'anyall.macro';
```

> Note that you need to have _`babel`_ and _`babel-plugin-macros`_ installed

## Examples

### Self explanatory example

```js
import { any, all } from 'anyall.macro';
all(1, 2, 3) === any(3, 1, 2); //Outputs: true;
```

Yeah, it does what it says. It means all arguments from first function equals any of arguments in second one

### Another example:

```js
import { any, all } from 'anyall.macro';

all(10, 11, 12) > all(5, 5, 10); //Outputs: false

all(5, 5, 5) === 5; //Outputs: true

3 <= all(3, 2); //Outputs: false

any(2, 1) > any(10, 1); //Outputs: true

3 <= any(1, 3); ////Outputs: true
```

## The Why?

I often catch myself doing someting like this in order to compare some values:

```js
if(['start', 'run', 'go', 'execute'].includes(x)) {...}
```

It's less boilerplate and also some way less readable than:

```js
if(x === 'start' || x ==='run' || x === 'go' || x === 'execute') {...}
```

In comparison to above examples using `anyall.macro` you can do:

```js
if(x === any('start', 'run', 'go', 'execute')) {...}
```

It's cleaner and less boilerplate!
Allows you to write comparison without repetitive tasks like writing `||` and `&&` muliple times, or what's even worst writing overhelming functions by using nested `Array.proptotype.find` and `Array.proptotype.every`
