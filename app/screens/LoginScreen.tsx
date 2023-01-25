/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginFailure, loginSuccess} from '../redux/authSlice';
import {RootState} from '../redux/reducers';
import {KeyboardAvoidingView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import Seperator from '../components/Seperator';
import colors from '../configs/colors';
import LoginFormTest from '../components/LoginFormTest';
import appStyles from '../configs/appStyles';
import {RootParamList} from '../navigation/RootNavigation';

type LoginScreenProps = NativeStackScreenProps<RootParamList, 'Login'>;
const LoginScreen = ({navigation}: LoginScreenProps) => {
  const dispatch = useDispatch();
  const email = useSelector((value: RootState) => value.authSlice.email);
  console.log(email, 'email');
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const handleSubmit = (email: string, password: string) => {
    try {
      dispatch(loginSuccess({email, password}));
      navigation.navigate('TabNavigation');
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <Screen>
      <KeyboardAvoidingView behavior="height">
        <ScrollView>
          <ImageBackground
            source={require('../assets/loginbg.png')}
            style={{height: 400}}>
            <View style={styles.container}>
              <View style={appStyles.center}>
                <Image
                  source={require('../assets/logo.png')}
                  style={{marginTop: 20}}
                />
                <Text style={appStyles.headerText}>Spoon </Text>
              </View>
              <View style={appStyles.center}>
                <AppButton
                  title="Login with Google"
                  onPress={() => console.log('AuthGoogle')}
                />
                <AppButton
                  title="Login with Facebook"
                  onPress={() => console.log('AuthFb')}
                />
              </View>
            </View>
          </ImageBackground>

          <View
            style={{justifyContent: 'center', flexDirection: 'row-reverse'}}>
            <Seperator />
            <Text>Or</Text>
            <Seperator />
          </View>

          <View>
            <LoginFormTest handleLogin={handleSubmit} />
          </View>
          <View>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Text style={[appStyles.linkText, styles.centerAlign]}>
                <Text style={{color: colors.grey}}>
                  Don't have an Account?{' '}
                </Text>
                <Text>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  auth0: {
    backgroundColor: colors.auth0,
    width: 300,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerAlign: {
    alignSelf: 'center',
  },
});
export default LoginScreen;
