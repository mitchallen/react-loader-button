import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chai from 'chai';

const expect = Chai.expect;

import LoaderButton from '../src/index';

describe('LoaderButton', () => {

  const renderer = new ShallowRenderer();
  renderer.render(<LoaderButton
    primary
    disabled={ true }
    type='submit'
    isLoading={ true }
    text='Signup'
    loadingText='Signing up…' />);
  const result = renderer.getRenderOutput();

  it('root element type muiName should equal RaisedButton', () => {
    // expect(wrapper.type()).to.eql('div');
    // expect(result.type).to.eql('div');
    // console.log(result.type);
    // console.log(result.type.muiName);
    expect(result.type.muiName).to.eql('RaisedButton');
  });

});