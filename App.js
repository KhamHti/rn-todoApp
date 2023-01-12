import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard, NativeAppEventEmitter } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
// import react from './assets/fonts';

export default function App() {

  

  const [todos, setToDos] = useState([
      {text: "buy coffee", key: "1"},
      {text: "create an app", key: "2"},
      {text: "play on the switch", key: "3"},
  ])

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3){
      setToDos((prevTodos) => {
        return [
        { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }else {
        Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
          {text: "understood", onPress: () => console.log('alert closed') }
        ]) 
      }

  }

  return (
   <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss()
    console.log("dismissed keyboard")
   }} >
      <View style={styles.container}>
         <Header/>
        <View style={styles.content} >
             <AddTodo submitHandler={submitHandler} />
          <View style={styles.list} >
             <FlatList
                data={todos}
                renderItem={({ item }) => (
                   <TodoItem item={item} pressHandler={pressHandler} />
                )}
             /> 
           </View>
        </View>
      </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 20,
  },
  list: {
    margin: 30,
  }
});
