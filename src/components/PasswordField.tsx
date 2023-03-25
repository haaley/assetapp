import React, {useState} from 'react';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {Icon, Input, Layout, StyleService, Text} from '@ui-kitten/components';

interface Props {
  password: string;
  onChangeText: (newValue: string) => void;
  showCaption?: boolean;
}
const PasswordField = ({password, onChangeText, showCaption}: Props) => {
  const [secureText, setSecureText] = useState(true);

  const toggleSecureEntry = () => setSecureText(!secureText);

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureText ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
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
    <Input
      style={styles.inputField}
      value={password}
      textContentType={'password'}
      secureTextEntry={secureText}
      accessoryRight={renderIcon}
      caption={
        showCaption && password.length > 0 && password.length < 8
          ? renderCaption('Your password is too short')
          : undefined
      }
      onChangeText={onChangeText}
      placeholder="Minimum 8 characters"
      label="Password"
    />
  );
};

const styles = StyleService.create({
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
});

export default PasswordField;
