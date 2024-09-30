import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigations/Router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
