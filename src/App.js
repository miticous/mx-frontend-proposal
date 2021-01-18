import React from 'react';
import { mainInitialStates, mainReducer } from './ducks';
import Routes from './routes';
import { StateProvider } from './store';
import 'antd/dist/antd.css';

const App = () => (
  <StateProvider initialState={mainInitialStates} reducer={mainReducer}>
    <Routes />
  </StateProvider>
);
export default App;
