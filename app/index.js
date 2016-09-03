import 'babel-polyfill';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import GroupPageContainer from './containers/GroupPageContainer';
import AdminPage from './components/AdminPage';
import NoMatch from './components/NoMatch';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="*" component={NoMatch} />
        <IndexRoute component={GroupPageContainer} />
        <Route path="/admin" component={AdminPage} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
