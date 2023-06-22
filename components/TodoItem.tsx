import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ id, text, done }) => {
  return (
    <View style={styles.item}>
      <View style={styles.circle} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#26b69b',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#424242',
  },
});

export default TodoItem;
