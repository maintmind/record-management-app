import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import store from './ducks/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
           <MuiThemeProvider>
              <App />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
