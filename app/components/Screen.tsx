import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface Props {
  style?: object;
  children?: JSX.Element | string;
}

const Screen = ({style, children}: Props): ReactElement => {
  return (
    <SafeAreaProvider style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: 20,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
