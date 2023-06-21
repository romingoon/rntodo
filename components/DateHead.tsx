import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DateHeadProps = {
  date: Date;
};

const DateHead = ({ date }: DateHeadProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <View style={styles.block}>
      <Text style={styles.dateText}>{formatted}</Text>
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
