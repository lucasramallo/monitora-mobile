import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import { 
  useFonts,
  Inter_900Black, 
  Inter_700Bold, 
  Inter_600SemiBold,
  Inter_500Medium, 
  Inter_400Regular 
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router/>
      </Provider>
    </NavigationContainer>
  );
} 