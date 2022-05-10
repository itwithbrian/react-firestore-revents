import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/layout/App';
import ScrollToTop from './app/layout/ScrollToTop';
import { configureStore } from './app/store/configureStore';
import { loadEvents } from './features/events/eventActions';

const store = configureStore();
store.dispatch(loadEvents());

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
