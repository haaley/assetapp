import React from 'react';
import {SafeAreaView} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import NavigationContainer from './navigation/NavigationContainer';
import {default as theme} from './theme/theme.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.dark, ...eva.light, ...theme}}>
        <NavigationContainer />
      </ApplicationProvider>
    </SafeAreaView>
  );
}

export default App;
