import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import config from 'react-global-configuration';
import configuration from './config';
import Loadable from 'react-loadable';
import Loading from './utils/loading/loading';

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

config.set(configuration);

ReactDOM.render(<LoadableComponent/>, document.getElementById('root'));
registerServiceWorker();