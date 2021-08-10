import React from "react";
import { StatusBar } from "react-native";

import { useFonts } from "expo-font";
import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { Home } from "./src/screens/Home";
import { Background } from './src/components/Background';

export default function App(){

  const [fontLoaded] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontLoaded){
    return <AppLoading />
  }

  

  return(
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent            
      />
      <Home />
    </Background>
  )
}