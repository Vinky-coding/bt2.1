import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HelloWorldSquare = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  square: {
    width: 200,
    height: 200, 
    backgroundColor: 'lightblue',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

export default HelloWorldSquare;