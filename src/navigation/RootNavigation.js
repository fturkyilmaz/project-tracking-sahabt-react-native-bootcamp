import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';

export const AppScreens = {
  login: 'Login',
  home: 'Home',
};

const Stack = createStackNavigator();

export default function StackNavigator() {
  const isLogin = false;

  const initialRouteName = isLogin ? AppScreens.home : AppScreens.login;

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name={AppScreens.login}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
