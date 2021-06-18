//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  console.log("App executed");
  console.log(require("./assets/favicon.png"));
  const handlePress = () => console.log("Text Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native! </Text>
      
      <Button 
        title="Click Me" 
        onPress={()=> console.log("tapped")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    
  },
});
