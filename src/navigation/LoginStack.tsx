import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export default function LoginStack() {
  return (
    <Navigator>
      <Screen name={'SigninScreen'} component={SigninScreen} />
      <Screen name={'SignUpScreen'} component={SignUpScreen} />
    </Navigator>
  );
}
