import {useNavigation} from '@react-navigation/native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Routes} from '../navigation/Routes';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<any>();

  return (
    <Layout style={styles.container}>
      <Text category={'h5'}>Login</Text>
      <Input
        style={styles.inputField}
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
        placeholder="Enter your e-mail"
        label="E-mail"
      />
      <Input
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
        placeholder="Minimum 8 characters"
        label="Password"
      />
      <Button size={'large'} style={styles.button}>
        Login
      </Button>
      <Text appearance={'hint'}>Don't have an account?</Text>
      <Button
        appearance={'ghost'}
        onPress={() => navigation.navigate(Routes.SignupScreen)}>
        Sign up
      </Button>
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
