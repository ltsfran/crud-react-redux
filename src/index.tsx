import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import store from './Store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);