import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RouterWrapper from './routes';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterWrapper />
      </div>
    </Provider>
    
  );
}

export default App;