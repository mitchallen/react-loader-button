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
  

## Usage

Add this line near the top of your file (like ```src/App.js```):

```
import LoaderButton from '@mitchallen/react-loader-button';
```

See the example below for more information on how to integrate with your application.

## Reference

This component is based on code found in this chapter of an online tutorial:

* http://serverless-stack.com/chapters/give-feedback-while-logging-in.html

The table of contents for that tutorial can be found here:

* http://serverless-stack.com/#table-of-contents


## Usage example

```
$ create-react-app react-loader-button-test
$ cd react-number-loader-button-test/
$ npm install @mitchallen/react-loader-button --save
$ npm install --save material-ui
```

#### Modify src/App.js

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Must include MuiThemeProvider!
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoaderButton from '@mitchallen/react-loader-button';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <h4>
            primary, disabled, isloading:
          </h4>
          <LoaderButton
            primary
            disabled={ true }
            type='submit'
            isLoading={ true }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            primary, disabled = false, isloading:
          </h4>
          <LoaderButton
            primary
            disabled={ false }
            type='submit'
            isLoading={ true }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            disabled, isloading:
          </h4>
          <LoaderButton
            disabled={ true }
            type='submit'
            isLoading={ true }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            primary, disabled = false, isloading = false:
          </h4>
          <LoaderButton
            primary
            disabled={ false }
            type='submit'
            isLoading={ false }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            disabled = false, isloading = false:
          </h4>
          <LoaderButton
            disabled={ false }
            type='submit'
            isLoading={ false }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            primary, disabled, isloading = false:
          </h4>
          <LoaderButton
            primary
            disabled={ true }
            type='submit'
            isLoading={ false }
            text='Signup'
            loadingText='Signing up …' />
          <h4>
            disabled, isloading = false:
          </h4>
          <LoaderButton
            disabled={ true }
            type='submit'
            isLoading={ false }
            text='Signup'
            loadingText='Signing up …' />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

```

Run the app

```
npm start
```

* * *

## Testing

### Run the Tests

To test, go to the root folder and type (sans __$__):

```
$ npm test
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

#### Version 0.1.7

* added ```run: yarn add react``` to ```.circleci/config.yml```

#### Version 0.1.6

* installed eslint to local dev dependencies
* react now exists only as a peer dependency

#### Version 0.1.5

* Added examples folder and example

#### Version 0.1.4

* Removed internal value and mode setting from indicator

#### Version 0.1.3

* Removed react-bootstrap dependency
* Spinning button indicator now comes from material-ui

#### Version 0.1.2

* Updated documentation

#### Version 0.1.1

* Updated documentation

#### Version 0.1.0 

* initial release

* * *