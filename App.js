import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Cadastro" options={{headerShown: false}} component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 