/*
    Module: @mitchallen/react-loader-button
    Author: Mitch Allen
*/

import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import CircularProgress from 'material-ui/CircularProgress';

const indicatorStyle = {
    container: {
      position: 'relative',
    },
    refresh: {
      display: 'inline-block',
      position: 'relative',
    },
  };

const CircleIndicator = (
  <CircularProgress size={25} thickness={3} />
);

const Indicator = (
    <RefreshIndicator
        size={40}
        left={0}
        top={0}
        status="loading"
        style={indicatorStyle.refresh}
      />
);
 
const LoaderButton = ({ isLoading, text, loadingText, disabled = false, ...props }) => (
  <RaisedButton  {...props}
     label={ !isLoading ? text : loadingText }  
     disabled={ disabled || isLoading } 
     icon={ isLoading && CircleIndicator  }
    />
);

LoaderButton.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  loadingText: PropTypes.string,
  disabled: PropTypes.bool
};

export default LoaderButton;