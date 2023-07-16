import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Start/Start';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login'; 
import PasswordRecovery from '../screens/PasswordRecovery/PasswordRecovery';
import CodeVerification from '../screens/CodeVerification/CodeVerification';
import { Home } from '../screens/Home/Home';
import Horarios from '../screens/Hours/Hours';
import { SubjectSelection } from '../screens/SubjectSelection/SubjectSelection';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Start" options={{headerShown: false}} component={Start} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="PasswordRecovery" options={{headerShown: false}} component={PasswordRecovery} />
        <Stack.Screen name="CodeVerification" options={{headerShown: false}} component={CodeVerification} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
        <Stack.Screen name="SubjectSelection" options={{headerShown: false}} component={SubjectSelection} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        {/* A tela abaixo deve estar dentro da TabNavigation em Home */}
        <Stack.Screen name="Horarios" options={{headerShown: false}} component={Horarios} />
    </Stack.Navigator>
  );
}