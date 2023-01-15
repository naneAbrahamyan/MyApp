import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import Seperator from '../components/Seperator';
import colors from '../configs/colors';
import style from '../configs/styles';

const LoginScreen = () => {
  return (
    <Screen>
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
            <AppButton title="Login with Google" />
            <AppButton title="Login with Facebook" />
          </View>
        </View>
      </ImageBackground>

      <View style = {{justifyContent:'center', flexDirection:'row-reverse'}}>
        <Seperator />
        <Text>Or</Text>
        <Seperator />
      </View>

      <View>
        <Text>Form</Text>
      </View>
      
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
