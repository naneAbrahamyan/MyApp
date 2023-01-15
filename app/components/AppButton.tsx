import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../configs/colors';
import style from '../configs/styles';
interface AppButtonProps {
  title: string;
}
const AppButton = ({title}: AppButtonProps) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity>
        <Text style={style.text}> {title} </Text>
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
