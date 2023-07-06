import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Start/Start';
import Cadastro from '../screens/Register/Register';
import Login from '../screens/Login/Login'; 

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Cadastro" options={{headerShown: false}} component={Cadastro} />
    </Stack.Navigator>
  );
}