import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ListName extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <Text style={(styles.bigBlue, styles.red)}>
          {this.props.num}. {this.props.name}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
