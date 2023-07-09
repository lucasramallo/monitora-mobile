import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../screens/Start/Start';
import Cadastro from '../screens/Register/Register';
import Login from '../screens/Login/Login'; 
import RecuperacaoSenha from '../screens/RecuperacaoSenha/RecuperacaoSenha';
import Codigo from '../screens/RecuperacaoSenha/Codigo';
import { Home } from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Inicio" options={{headerShown: false}} component={Inicio} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="RecuperacaoSenha" options={{headerShown: false}} component={RecuperacaoSenha} />
        <Stack.Screen name="Codigo" options={{headerShown: false}} component={Codigo} />
        <Stack.Screen name="Cadastro" options={{headerShown: false}} component={Cadastro} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
    </Stack.Navigator>
  );
}