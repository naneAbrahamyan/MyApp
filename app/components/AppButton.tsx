import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import colors from '../configs/colors';
import appStyles from '../configs/appStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface AppButtonProps {
  title: string;
  onPress: () => void;
  styleB?: boolean;
  icon: string;
  color?: string;
}
const AppButton = ({title, onPress, styleB, icon, color}: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button]}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons name={icon} size={22} color={color} />
        </View>
        <Text style={styleB ? {color: colors.white} : appStyles.text}>
          {' '}
          {title}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: colors.auth0,
    width: 350,
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 4,
  },
  logoContainer: {
    marginRight: 65,
    marginLeft: 12,
  },
});

export default AppButton;
