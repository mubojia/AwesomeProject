/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1, height: 300}}>
        <View style={{height: 10, backgroundColor: 'powderblue'}} />
        <View style={{height: 20, backgroundColor: 'skyblue'}} />
        <View style={{height: 30, backgroundColor: 'steelblue'}} />
        <View style={{height: 50, backgroundColor: 'red'}} />
      </View>
    );
  }
}
