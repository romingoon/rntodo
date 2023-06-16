import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DateHead = () => {
  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>2023년 5월 31일</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#26b69b',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
