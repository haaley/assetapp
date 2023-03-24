import React from 'react';
import {SafeAreaView} from 'react-native';
import NavigationContainer from './navigation/NavigationContainer';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer />
    </SafeAreaView>
  );
}

export default App;
