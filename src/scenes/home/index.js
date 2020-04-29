/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Bananas from '_components/demo';
import FlexDimensionsBasics from '_components/demo4';
import ButtonBasics from '_components/demo5';

console.log(ButtonBasics);
const HomeScreen = () => (
  <SafeAreaView>
    <Text>Screen: Home</Text>
    <FlexDimensionsBasics />
    <ButtonBasics />
    <View style={{alignItems: 'center'}}>
      <Bananas />
      <Text>Hello, world!</Text>
    </View>
  </SafeAreaView>
);

export default HomeScreen;
