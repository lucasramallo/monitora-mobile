import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store'

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router/>
      </Provider>
    </NavigationContainer>
  );
} 