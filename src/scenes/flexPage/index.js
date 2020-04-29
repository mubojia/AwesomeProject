/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const FlexScreen = () => (
  <View style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
        marginBottom: 5,
      }}>
      <View style={{width: 50, backgroundColor: 'powderblue'}}>
        <Text>111</Text>
      </View>
      <View style={{width: 50, backgroundColor: 'skyblue'}}>
        <Text>222</Text>
      </View>
      <View style={{width: 50, backgroundColor: 'steelblue'}}>
        <Text>333</Text>
      </View>
    </View>
    <View style={{flex: 2, backgroundColor: '#000'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <View
          style={{
            height: 50,
            marginRight: 100,
            backgroundColor: 'powderblue',
          }}>
          <Text style={{textAlign: 'center'}}>111</Text>
        </View>
        <View
          style={{
            height: 50,
            marginRight: 100,
            backgroundColor: 'skyblue',
          }}>
          <Text style={{textAlign: 'center'}}>222</Text>
        </View>
        <View
          style={{
            height: 50,
            marginRight: 100,
            backgroundColor: 'steelblue',
          }}>
          <Text style={{textAlign: 'center'}}>333</Text>
        </View>
      </View>
    </View>
    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
          <Text>111</Text>
        </View>
        <View style={{flex: 2, height: 50, backgroundColor: 'skyblue'}}>
          <Text>222</Text>
        </View>
        <View style={{flex: 3, height: 50, backgroundColor: 'steelblue'}}>
          <Text>333</Text>
        </View>
      </View>
    </View>
    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}}>
          <Text>111</Text>
        </View>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}}>
          <Text>222</Text>
        </View>
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}}>
          <Text>333</Text>
        </View>
      </View>
    </View>
  </View>
);

export default FlexScreen;
