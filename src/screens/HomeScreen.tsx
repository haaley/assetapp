import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation/Routes';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="AssetsDetail"
        onPress={() => navigation.navigate(Routes.AssetScreen)}
      />
    </View>
  );
};

export default HomeScreen;
