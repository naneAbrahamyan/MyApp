import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../configs/colors';
import appStyles from '../configs/appStyles';
interface AppButtonProps {
  title: string;
  onPress: () => void;
  styleB?: Object | undefined;
}
const AppButton = ({title, onPress, styleB}: AppButtonProps) => {
  return (
    <View style={[styles.button, styleB]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styleB ? {color: colors.grey} : appStyles.text}>
          {' '}
          {title}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.auth0,
    width: 350,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
});

export default AppButton;
