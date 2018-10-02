import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './index.css';
import PostsIndex from './components/posts_index';
import PostNew from './components/posts_new';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.devToolsExtension && window.devToolsExtension()
    )}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
