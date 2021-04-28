import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {List, ListItem } from 'react-native-elements';
export default class App extends React.Component {

  state = {
     data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const rsponse = await fetch("https://randomuser.me/api/?results=100&inc=name");
    const json = await rsponse.json();
    this.setState({data: json.results});
  };

  render(){
    return (
      <View style={StyleSheet.container}>
        <Text style={styles.bigBlue}>Comunev_Assignment</Text>
        <FlatList
        data = {this.state.data}
        keyExtractor={(x, i) => i}
        renderItem = {({item})=>

        <Text style={styles.red}>{item.name.title + " " + item.name.first + " " + item.name.last}</Text>}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    alignItems: 'center',
    justifyContent: 'center',

  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    padding: 40,
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontSize: 20,

  },
});