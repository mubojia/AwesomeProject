/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView style={styles.body}>
          <View>
            <Text style={styles.title}>Some text</Text>
            <TextInput
              style={styles.inTextInput}
              placeholder="you can type in me"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    padding: 10,
  },
  title: {
    fontSize: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  inTextInput: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
export default App;
