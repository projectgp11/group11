import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import NavigationComponent from '../components/BottomNavigationComponent.js'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

var s = require('../constants/MyStyles.js');


export default class HomeScreen extends React.Component {
  static navigationOptions = {
	//header: null,
	//tabBarLabel: 'Home',
    tabBarIcon: () => <Icon size={46}  name="home" color="#012541"/>
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 15,
	paddingLeft:15,
  }, 
});



AppRegistry.registerComponent('HomeScreen', () =>HomeScreen);
