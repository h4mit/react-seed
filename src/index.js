import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import USER from './core/user/user-inforamtion';
import Loadable from 'react-loadable';
import Loading from './utils/loading/loading';

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

let user = new USER();
user.GET();

ReactDOM.render(<LoadableComponent/>, document.getElementById('root'));
registerServiceWorker();