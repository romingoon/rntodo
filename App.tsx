import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import DateHead from './components/DateHead';

const App = () => {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaView>
      <View>
        <DateHead date={today} />
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
