import colors from './colors';
import {StyleSheet} from 'react-native';
// import '@fontsource/poppins'; // Defaults to weight 400.
// import '@fontsource/poppins';

const appStyles = StyleSheet.create({
  headerText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'grey',
    fontFamily: 'Poppins',
    fontSize: 18,
  },
  linkText: {
    color: colors.primary,
    fontSize: 14,
    marginTop: 10,
  },
  // font: {
  //   fontFamily: 'Poppins',
  // },
  h3: {
    fontSize: 20,
    color: colors.primary,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  h6: {
    fontSize: 18,
    color: colors.primary,
  },
});

export default appStyles;
