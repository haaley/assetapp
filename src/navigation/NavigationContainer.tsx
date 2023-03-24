import React from 'react';

import {NavigationContainer as ReactNavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

export default function NavigationContainer() {
  return (
    <ReactNavigationContainer>
      <RootStack />
    </ReactNavigationContainer>
  );
}
