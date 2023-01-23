/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Button
} from 'react-native';
import colors from '../configs/colors';
import {Screen} from 'react-native-screens';
import DropDown from '../components/DropDown';
import SearchTextInput from '../components/SearchTextInput';
import {Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appStyles from '../configs/appStyles';

interface ModalHandle {
  openModal: () => void;
  closeModal: () => void;
}
const HomeScreen = () => {
  const childModalRef = React.createRef<ModalHandle>();

  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([
    {label: 'Women', value: 'women'},
    {label: 'Men', value: 'men'},
    {label: 'Kid', value: 'kid'},
    {label: 'Home', value: 'home'},
  ]);
  return (

      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image source={require('../assets/AvatarIcon.png')} />
          </TouchableOpacity>
          <DropDown
            items={items}
            initialLabel="Women"
            ref = {childModalRef}
          />
          {/* <TouchableOpacity onPress={() => childModalRef.current?.openModal()}>
             <Text> Open </Text>
          </TouchableOpacity> */}
          <TouchableOpacity>
            <Image source={require('../assets/Settings.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterContainer}>
          <SearchTextInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TouchableOpacity>
            <Image source={require('../assets/Filter.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <LinearGradient
            colors={['#FFDEBC', '#FF6F15']}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 2,
              y: 2,
            }}
            style={styles.box}>
            <View>
              <Image
                source={require('../assets/girl.png')}
                style={styles.adBoxImg}
              />
            </View>
            <View style={styles.adBoxTexts}>
              <View style = {{alignItems: 'center'}}>
              <Text style = {appStyles.h3}> Beautiful Clothes </Text>
              <Text style = {appStyles.h6}> The joy of premium fashion </Text>
              </View>
              <TouchableOpacity style={[appStyles.button, styles.alignCenter]}>
                <Text style = {[appStyles.h4]}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    position:'relative',
    padding: 10,
    flex: 1,
    backgroundColor: 'yellow',
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer: {
    zIndex: -1,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    paddingTop: 20,
    zIndex: -1,
  },
  box: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // adBox: {
  //   flex: 1,
  // },
  adBoxImg: {
    marginHorizontal: 20, 
    // resizeMode: 'contain',
    width:130,
    height:130,
  },
  adBoxTexts: {
      justifyContent: 'space-around'
  },
  alignCenter: {
    alignSelf:'center'
  },

});

export default HomeScreen;
