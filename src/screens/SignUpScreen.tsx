import {useNavigation, useTheme} from '@react-navigation/native';
import {unwrapResult} from '@reduxjs/toolkit';
import {
  Button,
  CheckBox,
  Icon,
  Input,
  Layout,
  StyleService,
  Text,
} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import PasswordField from '../components/PasswordField';
import {Routes} from '../navigation/Routes';
import {register} from '../redux/reducers/authSlice';
import {validateEmail} from '../util';

const height = Dimensions.get('screen').height;
const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<any>();
  const [successful, setSuccessful] = useState(false);
  const {isLoggedIn} = useSelector((state: any) => state.auth);

  const [invalidEmail, setInvalidEmail] = useState(false);
  const dispatch = useDispatch<any>();

  const theme = useTheme();

  useEffect(() => {
    const navigateToSignin = () => navigation.navigate(Routes.SigninScreen);
    const navigateToMainStack = () => navigation.replace('MainStack');
    if (successful === true) {
      setTimeout(() => navigateToSignin(), 3000);
    }
    if (isLoggedIn) {
      navigateToMainStack();
    }
  }, [navigation, successful, isLoggedIn]);

  const renderCaption = (caption: string) => {
    return (
      <Layout style={styles.captionContainer}>
        <Text style={styles.captionText} status="danger">
          {caption}
        </Text>
      </Layout>
    );
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid>
      <Layout style={styles.wrapper}>
        {!successful ? (
          <Layout style={styles.container}>
            <Text category={'h5'}>Create your account</Text>
            <Input
              style={styles.inputField}
              value={firstName}
              autoCapitalize={'none'}
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
              autoCapitalize={'none'}
              textContentType={'emailAddress'}
              caption={
                invalidEmail && email
                  ? renderCaption('Your email is invalid')
                  : undefined
              }
              onChangeText={nextValue => {
                setEmail(nextValue);
                if (!validateEmail(nextValue)) {
                  setInvalidEmail(true);
                } else {
                  setInvalidEmail(false);
                }
              }}
              placeholder="Enter your e-mail"
              label="E-mail"
            />
            <PasswordField
              password={password}
              showCaption
              onChangeText={nextValue => setPassword(nextValue)}
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
              onPress={() =>
                dispatch(
                  register({
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: password,
                  }),
                )
                  .then(unwrapResult)
                  .then((result: any) => {
                    if (result.id) {
                      setSuccessful(true);
                    }
                  })
                  .catch((registerError: any) => {
                    console.error(registerError); // if there is an error
                  })
              }
              style={styles.button}
              disabled={
                !checked ||
                email.length === 0 ||
                lastName.length === 0 ||
                firstName.length === 0 ||
                invalidEmail ||
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

const styles = StyleService.create({
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
  captionIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    marginTop: 4,
  },
  captionContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
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
