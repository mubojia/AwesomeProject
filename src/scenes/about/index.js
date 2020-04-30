import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import ListName from '_components/demo1';
import Blink from '_components/demo2';
import FetchExample from '_components/demo8';

const AboutScreen = () => (
  <SafeAreaView>
    <Text>Screen: About</Text>
    <View>
      <ListName num="1" name="wangChongYang" />
      <ListName num="2" name="zhangSanFeng" />
      <ListName num="3" name="zhouBoTong" />
      <ListName num="4" name="hongQiGong" />
      <ListName num="5" name="ouYangFeng" />
    </View>
    <FetchExample />
    <Blink text="11111111111" />
  </SafeAreaView>
);

export default AboutScreen;
