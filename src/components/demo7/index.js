/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, SectionList} from 'react-native';

let data = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <View style={styles.container}>
          <SectionList
            sections={[
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {
                title: 'J',
                data: [
                  'Jackson',
                  'James',
                  'Jillian',
                  'Jimmy',
                  'Joel',
                  'John',
                  'Julie',
                ],
              },
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        {/* <FlatList
          data={data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },
});
