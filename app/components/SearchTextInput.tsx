import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

interface SearchTextInputProps {
  searchValue: string;
  setSearchValue: (e: string) => void;
}
const SearchTextInput = ({
  searchValue,
  setSearchValue,
}: SearchTextInputProps) => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={require('../assets/Search.png')}
        style={{width: 20, height: 20}}
      />
      <TextInput
        placeholder="Search"
        value={searchValue}
        onChangeText={e => setSearchValue(e)}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 11,
    height: 50,
    borderRadius: 20,
    flexGrow: 1,
    marginRight: 15,
  },
  textInput: {
    color: 'black',
  },
});

export default SearchTextInput;
