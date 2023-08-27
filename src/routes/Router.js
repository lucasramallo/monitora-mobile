import React from 'react';
import StackNavigator from './StackNavigator'
import AuthStack from './AuthStack'

export default function Router() {

  const auth = true // Para mudar a stack, basta trocar o valor da flag (true ou false)

  return (
    auth ? <StackNavigator /> : <AuthStack />
  );
}