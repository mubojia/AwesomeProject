/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import Bananas from '_components/demo';
import FlexDimensionsBasics from '_components/demo4';
import ButtonBasics from '_components/demo5';
import Touchables from '_components/demo6';

const HomeScreen = () => (
  <SafeAreaView>
    <ScrollView style={{padding: 20}}>
      <Text>Screen: Home</Text>
      <FlexDimensionsBasics />
      <ButtonBasics />
      <Touchables />
      <View style={{alignItems: 'center'}}>
        <Bananas />
        <Text>Hello, world!</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default HomeScreen;
