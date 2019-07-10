import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers'
import thunk from 'redux-thunk'
import './assets/styles/base.scss';
import 'sweetalert/dist/sweetalert.css';
// import Main from './pages/Main';
// import App from './pages/Main/App'
import App from './App'
// import configureStore from './config/configureStore';

const store = createStore(reducers, applyMiddleware(thunk))
// const rootElement = document.getElementById('root');

// const renderApp = Component => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Component />
//       </BrowserRouter>
//     </Provider>,
//     rootElement
//   );
// };

// renderApp(App);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
)
// if (module.hot) {
//   module.hot.accept('./pages/Main', () => {
//     const NextApp = require('./pages/Main').default
//     renderApp(NextApp);
//   });
// }

registerServiceWorker();

