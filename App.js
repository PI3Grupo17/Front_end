import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.js';
import GrupoScreen from './components/GrupoScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">  
         
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GrupoScreen" component={GrupoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;