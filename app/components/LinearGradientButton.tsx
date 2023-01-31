import React from 'react';
import {Text, View, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../configs/colors';
interface LinearGradientButtonProps {
  title: String;
  customStyle?: ViewStyle;
}

const LinearGradientButton = ({
  title,
  customStyle,
}: LinearGradientButtonProps) => {
  return (
    <View>
      <LinearGradient
        colors={['#FF9921', '#FF6F15']}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={[styles.button, customStyle]}>
        <Text style={{color: colors.white, fontFamily: 'Poppins'}}>
          {title}
        </Text>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LinearGradientButton;
