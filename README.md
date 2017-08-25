@mitchallen/react-loader-button
==
LoaderButton React component
--

<p align="left">
  <a href="https://circleci.com/gh/mitchallen/react-loader-button">
    <img src="https://img.shields.io/circleci/project/github/mitchallen/react-loader-button.svg" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/react-loader-button">
    <img src="https://codecov.io/gh/mitchallen/react-loader-button/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-loader-button">
    <img src="http://img.shields.io/npm/dt/@mitchallen/react-loader-button.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/@mitchallen/react-loader-button">
    <img src="http://img.shields.io/npm/v/@mitchallen/react-loader-button.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/@mitchallen/react-loader-button">
    <img src="https://img.shields.io/github/license/mitchallen/react-loader-button.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/react-loader-button --save
  
* * *

## Usage

1: Add this line near the top of your file (like ```src/App.js```):

```
import LoaderButton from '@mitchallen/react-loader-button';
```

__NOTE:__ LoaderButton must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<LoaderButton />
```


* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

    $ npm test
    
## Component Testing

### Prerequisite

If you've never installed __create-react-app__ (you may need to use ```sudo```):

```
$ npm install -g create-react-app
```

### Create a local npm link

In the original component folder (you may need to use ```sudo```):

```
$ npm link
```

### Create a test package

Create a root test folder and then do the following:

```
$ create-react-app react-loader-button-test
$ cd react-loader-button-test
$ npm link @mitchallen/react-loader-button
```

### Modify src/App.js

1: Add this line near the top:

```
import LoaderButton from '@mitchallen/react-loader-button';
```

__NOTE:__ LoaderButton must be Capitalized or component won't render.

2: Somewhere in the middle of the __render__ method add this line:

```
<LoaderButton />
```

### Run The Test App

```
$ npm start
```

### Cleanup

Remember to unlink when done.
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/react-loader-button.git](https://bitbucket.org/mitchallen/react-loader-button.git)
* [github.com/mitchallen/react-loader-button.git](https://github.com/mitchallen/react-loader-button.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.0 

* initial release

* * *