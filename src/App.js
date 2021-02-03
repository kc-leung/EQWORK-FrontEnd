import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/configureStore';

import './App.scss';

import Router from './routes/Router';
import Navbar from './components/Navbar/Navbar';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </Provider>
  );
}

export default App;
