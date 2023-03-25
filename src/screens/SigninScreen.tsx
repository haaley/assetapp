import {useNavigation} from '@react-navigation/native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';

import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import PasswordField from '../components/PasswordField';
import {Routes} from '../navigation/Routes';
import {login} from '../redux/reducers/authSlice';
const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const {isLoggedIn, error, user} = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.replace('MainStack');
    }
    console.log({error});
    console.log({isLoggedIn});
    console.log({user});
  }, [isLoggedIn, error, navigation, user]);

  return (
    <Layout style={styles.container}>
      <Text category={'h5'}>Login</Text>
      <Input
        style={styles.inputField}
        value={email}
        autoCapitalize="none"
        onChangeText={nextValue => setEmail(nextValue)}
        placeholder="Enter your e-mail"
        label="E-mail"
      />
      <PasswordField
        password={password}
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <Button
        size={'large'}
        style={styles.button}
        onPress={() => dispatch(login({email: email, password: password}))}>
        Login
      </Button>
      <Text appearance={'hint'}>Don't have an account?</Text>
      <Button
        appearance={'ghost'}
        onPress={() => navigation.navigate(Routes.SignupScreen)}>
        Sign up
      </Button>
      {error && (
        <Text category={'label'} appearance={'hint'} status="danger">
          {error}
        </Text>
      )}
    </Layout>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  inputField: {
    marginVertical: 20,
  },
  button: {
    width: '100%',
    marginVertical: 20,
  },
});
