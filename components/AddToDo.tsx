import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

const AddToDo = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.block}>
      <TextInput
        placeholder='할 일을 입력해주세요.'
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonStyle}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image source={require('../assets/icons/add_white/add_white.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26b69b',
    borderRadius: 24,
  },
});

export default AddToDo;
