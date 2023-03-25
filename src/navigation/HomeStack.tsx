import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AssetScreen from '../screens/AssetScreen';
import HomeScreen from '../screens/HomeScreen';
import {Routes} from './Routes';

const {Navigator, Screen} = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Navigator>
      <Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Screen name={Routes.AssetScreen} component={AssetScreen} />
    </Navigator>
  );
}
