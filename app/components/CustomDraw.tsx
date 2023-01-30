import * as React from 'react';
import {useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../configs/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/authSlice';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
interface CustomDrawProps {
  activeItemKey: String;
  navigation: NavigationProp<ParamListBase>;
}
const CustomDraw = ({activeItemKey, navigation}: CustomDrawProps) => {
  const dispatch = useDispatch();

  const [activeRoute, setActiveRoute] = useState(
    activeItemKey ? activeItemKey : 'NotHome',
  );
  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <DrawerContentScrollView contentContainerStyle={{borderRadius: 20}}>
          <View style={styles.horirzontalFlex}>
            <View style={{marginTop: 15}}>
              <Image source={require('../assets/AvatarImg.png')} />
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: '700'}}>
                {' '}
                Elanor Pena{' '}
              </Text>
            </View>
          </View>
          <View style={styles.mainItems}>
            <View style={styles.container}>
              <CustomDrawerItem
                onPress={() => {
                  setActiveRoute('NotHome');
                  navigation.navigate('NotHome');
                }}
                label="Home"
                active={activeRoute === 'NotHome'}
                iconName="home-outline"
              />
              <CustomDrawerItem
                onPress={() => {
                  setActiveRoute('MyOrders');
                  navigation.navigate('MyOrders');
                }}
                label="My Orders"
                iconName="wallet-outline"
                active={activeRoute === 'MyOrders'}
              />
              <CustomDrawerItem
                onPress={() => {
                  setActiveRoute('MyReturns');
                  navigation.navigate('MyReturns');
                }}
                label="My Returns"
                iconName="return-down-back"
                active={activeRoute === 'MyReturns'}
              />
            </View>
          </View>
        </DrawerContentScrollView>
        <TouchableOpacity
          onPress={() => {
            dispatch(logOut());
          }}
          style={{margin: 15}}>
          <View style={styles.horirzontalFlex}>
            <Ionicons name="exit-outline" size={30} />
            <Text style={{color: 'black'}}> Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
interface CustomDrawerTypes {
  onPress: () => void;
  label: string;
  active: boolean;
  iconName: string;
}

const CustomDrawerItem = ({
  onPress,
  label,
  active,
  iconName,
}: CustomDrawerTypes) => (
  <TouchableOpacity onPress={onPress}>
    {active ? (
      <LinearGradient
        colors={['#FFDEBC', '#FF6F15']}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.box}>
        {iconName ? (
          <View style={styles.centerItems}>
            <Ionicons name={iconName} size={22} color={colors.white} />
            <Text style={{marginLeft: 20, color: colors.white}}>{label}</Text>
          </View>
        ) : (
          <Text>{label}</Text>
        )}
      </LinearGradient>
    ) : (
      <View style={styles.notActive}>
        {iconName ? (
          <View style={styles.centerItems}>
            <Ionicons name={iconName} size={22} />
            <Text style={{marginLeft: 20, fontFamily: 'Poppins'}}>{label}</Text>
          </View>
        ) : (
          <Text>{label}</Text>
        )}
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mainItems: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  drawerContainer: {
    height: 700,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 300,
  },
  box: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    height: 40,
  },
  notActive: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 15,
    height: 40,
  },
  horirzontalFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomDraw;
