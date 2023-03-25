import {useNavigation, useTheme} from '@react-navigation/native';
import {
  Button,
  CheckBox,
  Icon,
  Input,
  Layout,
  Text,
} from '@ui-kitten/components';
import {Dimensions, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Routes} from '../navigation/Routes';

const height = Dimensions.get('screen').height;
const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<any>();
  const [successful, setSuccessful] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const navigateToSignin = () => navigation.navigate(Routes.SigninScreen);
    if (successful === true) {
      setTimeout(() => navigateToSignin(), 3000);
    }
  }, [navigation, successful]);

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Layout style={styles.wrapper}>
        {!successful ? (
          <Layout style={styles.container}>
            <Text category={'h5'}>Create your account</Text>
            <Input
              style={styles.inputField}
              value={firstName}
              textContentType={'name'}
              onChangeText={nextValue => setFirstName(nextValue)}
              placeholder="Enter your first name"
              label="First Name"
            />
            <Input
              style={styles.inputField}
              textContentType={'familyName'}
              value={lastName}
              onChangeText={nextValue => setLastName(nextValue)}
              placeholder="Enter your last name"
              label="Last Name"
            />
            <Input
              style={styles.inputField}
              value={email}
              textContentType={'emailAddress'}
              onChangeText={nextValue => setEmail(nextValue)}
              placeholder="Enter your e-mail"
              label="E-mail"
            />
            <Input
              style={styles.inputField}
              value={password}
              textContentType={'password'}
              onChangeText={nextValue => setPassword(nextValue)}
              placeholder="Minimum 8 characters"
              label="Password"
            />
            <CheckBox
              checked={checked}
              onChange={nextChecked => setChecked(nextChecked)}>
              <Text>
                <Text appearance={'hint'}>
                  I am over 18 years of age and I have read and agree to the
                </Text>
                <Text category={'label'}> Terms of Service</Text>
                <Text appearance={'hint'}> and </Text>
                <Text category={'label'}> Privacy policy</Text>
              </Text>
            </CheckBox>
            <Button
              size={'large'}
              onPress={() => setSuccessful(true)}
              style={styles.button}
              disabled={
                !checked ||
                email.length === 0 ||
                lastName.length === 0 ||
                firstName.length === 0 ||
                password.length < 8
              }>
              Create account
            </Button>
            <Text appearance={'hint'}>Already have an account?</Text>
            <Button
              appearance={'ghost'}
              onPress={() => navigation.navigate(Routes.SigninScreen)}>
              Log in Here
            </Button>
          </Layout>
        ) : (
          <Layout style={styles.iconContainer}>
            <Icon
              name="checkmark-circle-outline"
              style={styles.successIcon}
              fill={theme.colors.primary}
            />
            <Text category={'h5'}>Your account was created successfuly!</Text>
          </Layout>
        )}
      </Layout>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height,
  },
  inputField: {
    marginVertical: 16,
  },
  button: {
    width: '100%',
    marginVertical: 16,
  },
  successIcon: {
    flex: 1,
    flexGrow: 0,
    backgroundColor: 'transparent',
    height: 100,
    width: 100,
  },
});
