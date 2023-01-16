import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import colors from '../configs/colors';
import AppButton from './AppButton';

interface FormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<FormProps> = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{paddingTop: 40}}>
      <Text>Email</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputField}
        secureTextEntry={true}
        value={password}
        placeholder="Enter your Password"
        onChangeText={setPassword}
      />
      <AppButton
        title="Submit"
        onPress={() => onSubmit(email, password)}
        styleB={styles.button}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    marginVertical: 10,
    backgroundColor: 'beige',
    borderRadius: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: colors.grey,
    marginLeft: 20,
  },
});
export default LoginForm;
