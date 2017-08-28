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
          <LoaderButton
              primary
              disabled={ true }
              type='submit'
              isLoading={ true }
              text='Signup'
              loadingText='Signing up …' />
          <br /><br />
          <LoaderButton
              primary
              disabled={ false }
              type='submit'
              isLoading={ false }
              text='Signup'
              loadingText='Signing up …' />
          <br /><br />
          <LoaderButton
              secondary
              disabled={ false }
              type='submit'
              isLoading={ false }
              text='Signup'
              loadingText='Signing up …' />
          <br /><br />
          <LoaderButton
              disabled={ false }
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
