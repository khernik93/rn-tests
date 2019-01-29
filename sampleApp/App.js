import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from 'khernik93-test-package';

export default class App extends React.Component {
  render() {
    Test.getTestString().then(value => console.log(value));
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start workingfdsfdfdfdfssfs on ydadour adpp!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
