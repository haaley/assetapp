import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Routes} from './Routes';

const {Navigator, Screen} = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Navigator screenOptions={{title: ''}}>
      <Screen
        name={Routes.SigninScreen}
        component={SigninScreen}
        options={{title: ''}}
      />
      <Screen name={Routes.SignupScreen} component={SignUpScreen} />
    </Navigator>
  );
}
