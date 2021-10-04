import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App run");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: 150, height: 70 }}
      ></View>
      <Text>Hello Wrold!!</Text>
      <Button title="save" onPress={() => console.log("Click")}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
