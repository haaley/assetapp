import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const SigninScreen = () => {
  useEffect(() => console.log('Hello!'));
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
      }}>
      <Text style={{backgroundColor: 'yellow'}}>SigninScreen</Text>
    </View>
  );
};

export default SigninScreen;
