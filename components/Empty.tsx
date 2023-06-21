import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image source={require('../assets/images/circle.png')} style={styles.image} resizeMode='center' />
      <Text style={styles.description}> 야호! 할 일이 없어요!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: 'gray',
  },
});

export default Empty;
