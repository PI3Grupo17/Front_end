import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.js';
import GrupoScreen from './components/GrupoScreen.js';
import QuemsomosScreen from './components/QuemsomosScreen';
import PesquisaScreen from './components/PesquisaScreen';
import GrupocriadoScreen from './components/GrupocriadoScreen';
import CriargrupoScreen from './components/CriargrupoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">  
         
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GrupoScreen" component={GrupoScreen} />
        <Stack.Screen name="QuemsomosScreen" component={QuemsomosScreen} />
        <Stack.Screen name="PesquisaScreen" component={PesquisaScreen} />
        <Stack.Screen name="GrupocriadoScreen" component={GrupocriadoScreen} />
        <Stack.Screen name="CriargrupoScreen" component={CriargrupoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;