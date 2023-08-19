import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../screens/Start/Start';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login'; 
import PasswordRecovery from '../screens/PasswordRecovery/PasswordRecovery';
import CodeVerification from '../screens/CodeVerification/CodeVerification';
import NewPassword from '../screens/NewPassword/NewPassword';
import SubjectSelection from '../screens/SubjectSelection/SubjectSelection';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Start" options={{headerShown: false}} component={Start} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="PasswordRecovery" options={{headerShown: false}} component={PasswordRecovery} />
        <Stack.Screen name="CodeVerification" options={{headerShown: false}} component={CodeVerification} />
        <Stack.Screen name="NewPassword" options={{headerShown: false}} component={NewPassword} />
        <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
        <Stack.Screen name="SubjectSelection" options={{headerShown: false}} component={SubjectSelection} />
    </Stack.Navigator>
  );
}