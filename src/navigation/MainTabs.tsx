import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Icon, withStyles} from '@ui-kitten/components';
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

const renderIcon = (color: string, name: string) => (
  <Icon fill={color} name={name} style={{height: 30, width: 30}} />
);

function MainTabs({eva}: any) {
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: eva.theme['color-primary-default'],
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => renderIcon(color, 'home-outline'),
        }}
      />
      <Tab.Screen
        name={Routes.TradeScreen}
        component={TradeScreen}
        options={{
          tabBarLabel: 'Trade',
          tabBarIcon: ({color}) => renderIcon(color, 'swap-outline'),
        }}
      />
      <Tab.Screen
        name={Routes.PortfolioScreen}
        component={PortfolioScreen}
        options={{
          tabBarLabel: 'Portfolio',
          tabBarIcon: ({color}) => renderIcon(color, 'pie-chart-outline'),
        }}
      />
    </Tab.Navigator>
  );
}

export default withStyles(MainTabs, () => ({}));
