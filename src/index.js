/*
    Module: @mitchallen/react-loader-button
    Author: Mitch Allen
*/

import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { Glyphicon } from 'react-bootstrap';

const LoaderButton = ({ isLoading, text, loadingText, disabled = false, ...props }) => (
  <RaisedButton  {...props}
   label={ !isLoading ? text : loadingText }  
   disabled={ disabled || isLoading } 
   icon={ isLoading && <Glyphicon glyph='refresh' className='spinning' />}
 />
);

LoaderButton.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  loadingText: PropTypes.string,
  disabled: PropTypes.bool
};

export default LoaderButton;