import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hours from '../screens//Hours/Hours';
import HomeScreen from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarStyle: { height: 70 }, 
        tabBarItemStyle: { paddingVertical: 10 },
        headerShown: false, 
        tabBarInactiveTintColor: "#949BA5", 
        tabBarActiveTintColor: "black" 
      }}>
      <Tab.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: "Home", 
          tabBarIcon: ({ focused, color, size }) => 
            <Feather 
              name="home" 
              size={size} 
              color={color}
            /> 
        }}/>
      <Tab.Screen 
        name="Hours" 
        component={Hours} 
        options={{ 
          tabBarLabel: "Horários",
          tabBarIcon: ({ focused, color, size }) => 
            <Feather 
              name="clock" 
              size={size} 
              color={color}
            /> 
        }}/>
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ 
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color, size }) => 
            <Feather 
              name="user" 
              color={color} 
              size={size}
            /> 
        }}/>
    </Tab.Navigator>
  );
}