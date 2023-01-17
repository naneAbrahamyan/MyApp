import colors from './colors';
import {StyleSheet} from 'react-native';

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
});

export default appStyles;
