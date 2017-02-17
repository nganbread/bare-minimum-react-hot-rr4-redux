import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';

const dom = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(<Component />,
    dom
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  console.log(arguments)
  render(RootApp)
});


