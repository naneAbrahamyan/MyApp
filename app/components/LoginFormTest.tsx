/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../configs/colors';
import * as Yup from 'yup';

import {Formik} from 'formik';
import appStyles from '../configs/appStyles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(4, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});

interface LoginFormProps {
  handleLogin: (email: string, password: string) => void;
}
const LoginFormTest = ({handleLogin}: LoginFormProps) => {
  const [isFocused, setIsFocused] = useState('');

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={({email, password}) => handleLogin(email, password)}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.input}>
            <View>
              <Text>Email</Text>

              <TextInput
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={() => setIsFocused('')}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onFocus={() => {
                  setIsFocused('email');
                  touched.email = true;
                }}
                style={[
                  styles.textInput,
                  isFocused == 'email' ? styles.focused : styles.unFocused,
                ]}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
            </View>
            <View>
              <Text>Password</Text>

              <TextInput
                placeholder="Password"
                onChangeText={handleChange('password')}
                autoCapitalize="none"
                secureTextEntry
                textContentType="password"
                value={values.password}
                onFocus={() => {
                  setIsFocused('password');
                  touched.password = true;
                }}
                onBlur={() => {
                  () => setIsFocused('');
                }}
                style={[
                  styles.textInput,
                  isFocused === 'password' ? styles.focused : styles.unFocused,
                ]}
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.leftAlign}>
              <TouchableOpacity onPress={() => console.log('clicked')}>
                <Text style={appStyles.linkText}>Forgot your Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}>
              <Text
                style={{color: colors.white, fontSize: 18, fontWeight: '600'}}>
                {' '}
                Log In{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    height: 45,
    width: 350,
  },
  headerText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    marginVertical: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'grey',
    width: 350,
  },
  focused: {
    borderColor: 'orange',
  },
  unFocused: {
    borderColor: 'white',
  },
  leftAlign: {
    marginTop: 5,
    alignSelf: 'flex-end',
  },
});

export default LoginFormTest;
