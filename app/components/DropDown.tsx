import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import colors from '../configs/colors';

type Item = {
  label: string;
  value: string;
};
interface DropDownProps {
  items: Item[];
  initialLabel: string;
  clickedOutside: boolean;
  setClickedOutside: (value: boolean) => void;
}

const DropDown = ({
  items,
  initialLabel,
  clickedOutside,
  setClickedOutside,
}: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialLabel);

  const renderItem = (item: string) => {
    return item !== value ? (
      <TouchableOpacity onPress={() => setValue(item)}>
        <View style={styles.dropDownItem}>
          <View style={styles.dropDownItem}>
            <Text style={styles.itemText}>{item}</Text>
            <View style={styles.seperator} />
          </View>
        </View>
        {/* <View style={styles.seperator} /> */}
      </TouchableOpacity>
    ) : (
      <View />
    );
  };

  return (
    <View style={styles.topContainer}>
      <Pressable
        onPress={() => {
          setClickedOutside(true);
          // clickedOutside = true;
          setOpen(!open);
          console.log('here');
        }}>
        <Text style={styles.header}>{value} </Text>

        {open && clickedOutside && (
          <>
            <View style={styles.dropDownContainer}>
              <FlatList
                scrollEnabled={false}
                data={items}
                keyExtractor={item => item.label}
                renderItem={({item}) => renderItem(item.label)}
              />
            </View>
          </>
        )}
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    position: 'relative',
    alignSelf: 'center',
  },
  header: {
    color: colors.header,
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  dropDownContainer: {
    position: 'absolute',
    overflow: 'hidden',
    marginTop: 65,
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
