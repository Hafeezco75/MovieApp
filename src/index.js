import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './app/store';
import Counter from "./components/Counter";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <Provider store={store}>
    <App />
    <Counter/>
  </Provider>
    </React.StrictMode>
);


reportWebVitals();
