import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AssetScreen from '../screens/AssetScreen';
import HomeScreen from '../screens/HomeScreen';
import {Routes} from './Routes';
import {Icon, Layout, Text, Button} from '@ui-kitten/components';

const {Navigator, Screen} = createNativeStackNavigator();

const customHeader = (props: any) => {
  return (
    <Layout
      style={{
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        style={{position: 'absolute', left: 0}}
        appearance={'ghost'}
        onPress={() => props.navigation.goBack()}
        accessoryLeft={<Icon name="arrow-back-outline" fill={'black'} />}
      />
      <Text category={'h6'}>{props.route.params.title}</Text>
      <Text category={'c1'} appearance={'hint'}>
        {props.route.params.shortName}
      </Text>
    </Layout>
  );
};

export default function HomeStack() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Screen
        name={Routes.AssetScreen}
        component={AssetScreen}
        options={{
          headerShown: true,
          header: (props: any) => customHeader(props),
        }}
      />
    </Navigator>
  );
}
