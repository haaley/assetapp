import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from './LoginStack';
import MainTabs from './MainTabs';

const {Navigator, Screen} = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'MainStack'} component={MainTabs} />
      <Screen name={'LoginStack'} component={LoginStack} />
    </Navigator>
  );
}
