import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabRouter';
import Horarios from '../screens/Hours/Hours';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={TabNavigator} />
        {/* A tela abaixo deve estar dentro da TabNavigation em Home */}
        <Stack.Screen name="Horarios" options={{headerShown: false}} component={Horarios} />
    </Stack.Navigator>
  );
}