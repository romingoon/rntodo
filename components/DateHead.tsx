import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type DateHeadProps = {
  date: Date;
};

const DateHead = ({ date }: DateHeadProps) => {
  const [greeting, setGreeting] = useState('');

  const dayOfWeeks = ['일', '월', '화', '수', '목', '금', '토'];

  const dateLocaleStr = (date: Date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = dayOfWeeks[date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${dayOfWeek})`;
  };
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
        <Text style={styles.dateText}>{dateLocaleStr()}</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DateHead;
