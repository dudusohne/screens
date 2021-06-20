import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';

export default function App() {

  const [ fontsLoaded ] = useFonts ({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  });

  if (!fontsLoaded)
  return <AppLoading />

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer >
  );
}


