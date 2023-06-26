import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import AddToDo from './components/AddToDo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorage from './storages/todosStorage';

const App = () => {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: '운동하기', done: true },
    { id: 2, text: '리액트 네이티브 공부하기', done: false },
    { id: 3, text: '눈 마사지 하기', done: false },
  ]);

  //불러오기
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  //저장하기
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = (text: string) => {
    // 새로 등록할 항목의 id를 구한다.
    // 등록된 항목 중에서 가장 큰 id를 구하고, 그 값에 1을 더한다.
    // 만약 리스트가 비어있다면 1을 id로 사용한다.

    const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = (id: number) => {
    const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    setTodos(nextTodos);
  };

  const onRemove = (id: number) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddToDo onInsert={onInsert} />
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
