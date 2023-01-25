import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import colors from '../configs/colors';
import DropDown from '../components/DropDown';
import SearchTextInput from '../components/SearchTextInput';
import LinearGradient from 'react-native-linear-gradient';
import appStyles from '../configs/appStyles';
import {getProducts} from '../api';
import Product from '../components/Product';
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAPI = async () => {
      try {
        const value = (await getProducts())?.data.products;
        setData(value);
      } catch (error) {
        console.log(error, 'error');
      }
    };
    getAPI();
  }, []);
  return (
    <View style={styles.topContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/AvatarIcon.png')} />
        </TouchableOpacity>
        <DropDown items={items} initialLabel="Women" ref={childModalRef} />
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
            <View style={styles.center}>
              <Text style={appStyles.h3}> Beautiful Clothes </Text>
              <Text style={appStyles.h6}> The joy of premium fashion </Text>
            </View>
            <TouchableOpacity style={[appStyles.button, styles.alignCenter]}>
              <Text style={appStyles.h4}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.newArrivalBox}>
        <Text style={appStyles.h1}> New Arrival </Text>
        <TouchableOpacity>
          <Text style={{color: colors.primary}}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          contentContainerStyle={styles.productsList}
          keyExtractor={(item, index) => index + ''}
          renderItem={item => <Product product={item.item} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    position: 'relative',
    padding: 10,
    flex: 1,
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
  adBoxImg: {
    marginHorizontal: 20,
    width: 130,
    height: 130,
  },
  adBoxTexts: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  newArrivalBox: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  center: {
    alignItems: 'center',
  },
});

export default HomeScreen;
