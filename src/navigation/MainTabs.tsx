import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import PortfolioScreen from '../screens/PortfolioScreen';
import TradeScreen from '../screens/TradeScreen';
import HomeStack from './HomeStack';
import {Routes} from './Routes';

export type MainTabsParamsList = {
  [Routes.HomeScreen]: undefined;
  [Routes.TradeScreen]: undefined;
  [Routes.PortfolioScreen]: undefined;
  HomeStack: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamsList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={'HomeStack'} component={HomeStack} />
      <Tab.Screen
        name={Routes.TradeScreen}
        component={TradeScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen name={Routes.PortfolioScreen} component={PortfolioScreen} />
    </Tab.Navigator>
  );
}
