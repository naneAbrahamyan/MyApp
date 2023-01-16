import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppButton from '../components/AppButton';
import LoginForm from '../components/LoginForm';
import Screen from '../components/Screen';
import Seperator from '../components/Seperator';
import colors from '../configs/colors';
import style from '../configs/styles';
import {loginFailure, loginSuccess} from '../redux/authSlice';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {RootState} from '../redux/reducers';
import {KeyboardAvoidingView} from 'react-native';

const LoginScreen = () => {
  const {setItem} = useAsyncStorage('isLoggedIn');

  const dispatch = useDispatch();
  const email = useSelector((value: RootState) => value.authSlice.email);
  console.log(email);
  const handleSubmit = async (email: string, password: string) => {
    try {
      dispatch(loginSuccess({email, password}));
      await setItem('true');
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <Screen>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={20}>
        <ImageBackground
          source={require('../assets/loginbg.png')}
          style={{height: 400}}>
          <View style={styles.container}>
            <View style={style.center}>
              <Image
                source={require('../assets/logo.png')}
                style={{marginTop: 20}}
              />
              <Text style={style.headerText}>Spoon </Text>
            </View>
            <View style={style.center}>
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

        <View style={{justifyContent: 'center', flexDirection: 'row-reverse'}}>
          <Seperator />
          <Text>Or</Text>
          <Seperator />
        </View>

        <View>
          <LoginForm onSubmit={handleSubmit} />
        </View>
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
});
export default LoginScreen;
