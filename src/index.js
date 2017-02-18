import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore((state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const dom = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(<Provider store={store}>
    <Component />
  </Provider>,
    dom
  );
};

render(RootApp);

module.hot.accept('./RootApp', () => {
  console.log(arguments)
  render(RootApp)
});


