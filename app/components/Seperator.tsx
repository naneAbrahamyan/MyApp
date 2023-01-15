import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../configs/colors';

const Seperator = (): ReactElement => {
  return <View style={styles.view}></View>;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.grey,
    height: 1,
    width: 200,
    margin: 10,
  },
});

export default Seperator;
