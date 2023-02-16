import React, { useState } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntIcons from "@expo/vector-icons/AntDesign";

import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setToDos] = useState([
    { text: "drink coffee", key: "1" },
    { text: "coding", key: "2" },
    { text: "play game", key: "3" },
  ]);

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todo must be over 3 characters long", [
        { text: "Ok", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <SwipeListView
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
              renderHiddenItem={({ item }) => (
                <View style={styles.del}>
                  <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <AntIcons name="delete" size={20} color="coral" />
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={50}
              rightOpenValue={-75}
              showsVerticalScrollIndicator={false}
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
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  list: {
    margin: 30,
    width: "85%",
  },
  del: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
