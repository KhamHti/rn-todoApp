import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}

export default header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 49,
    backgroundColor: "coral",
    height: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
