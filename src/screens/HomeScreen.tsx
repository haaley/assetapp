import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../navigation/Routes';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const {user} = useSelector((state: any) => state.auth);

  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>User info: {user.firstName}</Text>
      <Button
        title="AssetsDetail"
        onPress={() => navigation.navigate(Routes.AssetScreen)}
      />
    </View>
  );
};

export default HomeScreen;
