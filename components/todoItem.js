import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <Ionicons name="home-sharp" size={18} color="#FFF" />
      <Text style={styles.itemText}>{item.text}</Text>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Ionicons name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "coral",
    justifyContent: "space-between",
  },
  itemText: {
    marginLeft: 10,
    color: "#fff",
    fontWeight: "bold",
  },
});
