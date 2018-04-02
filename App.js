import React, { Component } from 'react'
import { AppRegistry, StyleSheet,Scrollview, Text, View, Button } from 'react-native'
//import { NavigationComponent } from 'react-native-material-bottom-navigation'
import NavigationComponent from './components/BottomNavigationComponent'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MyNav from './MyNav.js'
import Home from './screens/HomeScreen.js'
import About from './screens/AboutScreen.js'
import Settings from './screens/SettingsScreen.js'


const styles = StyleSheet.create({
container: {  
flex: 1,   
backgroundColor: '#012541',
alignItems: 'center',
justifyContent: 'center',
},
MyNav: {
          height: 160,
          elevation: 20,
          position: 'absolute',
		  left: 0,
		  right: 0,
          bottom: 0,

   },
}); 

export default class App extends Component {
  render() {
    return (
    <MyNav/>
   )
  }
}




AppRegistry.registerComponent('App', () =>App);
