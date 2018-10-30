// react-test-renderer
import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('Should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput()); 
})
