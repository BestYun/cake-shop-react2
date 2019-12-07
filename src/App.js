import React from 'react';
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'flex.css/dist/data-flex.css';
import './App.css'

import {
  StoreProvider
} from 'easy-peasy';
import store from './store/index'
import AppRouter from './router/index'

function App() {
  return (
    <StoreProvider store={
      store
    }>
      <div className="App" >
        <AppRouter />

      </div>
    </StoreProvider>
  );
}

export default App;
