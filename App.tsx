import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import AddToDo from './components/AddToDo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

const App = () => {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: '운동하기', done: true },
    { id: 2, text: '리액트 네이티브 공부하기', done: false },
    { id: 3, text: '눈 마사지 하기', done: false },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
          <AddToDo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
