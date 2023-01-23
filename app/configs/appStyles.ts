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
    fontSize: 18,
    color: colors.primary,
    fontFamily: 'Poppins',
    fontWeight: '700',
    margin: 1,
  },
  h4: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: 'Poppins',
    fontWeight: '700',
    margin: 1,
  },
  h6: {
    fontSize: 16,
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    width: '55%',
  },
});

export default appStyles;
