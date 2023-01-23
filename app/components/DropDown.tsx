import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import colors from '../configs/colors';

import Modal from 'react-native-modal';

type Item = {
  label: string;
  value: string;
};
interface DropDownProps {
  items: Item[];
  initialLabel: string;
}

const DropDown = forwardRef(({items, initialLabel}: DropDownProps, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(initialLabel);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalVisible(true),
    closeModal: () => setModalVisible(false),
  }));

  const renderItem = (item: string) => {
    return item !== value ? (
      <TouchableOpacity onPress={() => setValue(item)}>
        <View style={styles.dropDownItem}>
          <View style={styles.dropDownItem}>
            <Text style={styles.itemText}>{item}</Text>
            <View style={styles.seperator} />
          </View>
        </View>
      </TouchableOpacity>
    ) : (
      <View />
    );
  };

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity onPress={() => setModalVisible(() => !modalVisible)}>
        <Text style={styles.header}>{value} </Text>
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        backdropOpacity={0}
        animationInTiming={1}
        animationOutTiming={1}
        style={styles.dropDownContainer}>
        <View>
          <FlatList
            scrollEnabled={false}
            data={items}
            keyExtractor={item => item.label}
            renderItem={({item}) => renderItem(item.label)}
          />
        </View>
      </Modal>
    </View>
  );
});
const styles = StyleSheet.create({
  topContainer: {
    // position: 'relative',
    alignSelf: 'center',
  },
  header: {
    color: colors.header,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  dropDownContainer: {
    marginTop: 80,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 3,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignSelf: 'center',
    height: 130,
    width: 150,
    paddingHorizontal: 30,
  },
  itemText: {
    marginBottom: 3,
    color: colors.primary,
    // fontFamily: appStyles.font.fontFamily,
    fontSize: 18,
  },
  dropDownItem: {
    margin: 3,
    alignItems: 'center',
  },
  seperator: {
    margin: 3,
    height: 2,
    width: 90,
    backgroundColor: 'grey',
  },
});

export default DropDown;
