import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './redux/reducers/RootReducer'
import App from './components/App/App';
import './index.scss';

const store = createStore(RootReducer, composeWithDevTools(
    applyMiddleware(ReduxThunk),
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('countries'));
