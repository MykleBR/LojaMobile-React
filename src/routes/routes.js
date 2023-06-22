import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Initial from '../components/Initial';
import LoginScreen from '../components/LogScreen';
import LostPW from '../components/LossPW';
import Register from '../components/NewUser';
import MainContent from '../components/MainContent';




const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LossPW" component={LostPW} options={{ headerShown: false }} />
      <Stack.Screen name="NewUser" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="MainContent" component={MainContent} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default Routes;