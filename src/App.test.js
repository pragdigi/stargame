import React from 'react';
import ReactDOM from 'react-dom';
import StarGame from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarGame />, div);
  //ReactDOM.unmountComponentAtNode(div);
});
