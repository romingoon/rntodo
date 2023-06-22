import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DateHeadProps = {
  date: Date;
};

const DateHead = ({ date }: DateHeadProps) => {
  const [greeting, setGreeting] = useState('');

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    const hour = date.getHours();
    const greeting =
      hour >= 5 && hour < 12
        ? 'Good Morning!🤗'
        : hour >= 12 && hour < 18
        ? 'Good Afternoon!😪'
        : hour >= 18 && hour < 22
        ? 'Good Evening!😌'
        : 'Good Night!😴';
    setGreeting(greeting);
  }, []);

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor='#26b69b' barStyle='light-content' />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
        <Text style={styles.helloText}>{greeting}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26b69b',
  },
  block: {
    padding: 16,
    backgroundColor: '#26b69b',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DateHead;
