import colors from './colors';
export default {
  colors,
  headerText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
  } as React.CSSProperties,
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
};
