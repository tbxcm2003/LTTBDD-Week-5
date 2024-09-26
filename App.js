import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './components/screen1'; 
import Screen2 from './components/screen2';   
import Screen3 from './components/screen3';

const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen 
          name="screen1" 
          component={Screen1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="screen2" 
          component={Screen2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="screen3" 
          component={Screen3} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
