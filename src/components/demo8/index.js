/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('https://api.apiopen.top/musicRankings')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.result,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderItemView({item}) {
    console.log(item.name);
    return <Text>{item.name}123412341</Text>;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{paddingTop: 20}}>
        <Text>123412341</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
