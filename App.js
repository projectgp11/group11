import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MyNav from './MyNav.js'
import Home from './MyHome/MyCamera.js';
import About from './MyAbout/About.js';
import Settings from './MySettings/Settings.js';

/*const styles = StyleSheet.create({


heading: {
marginBottom:30,
fontSize: 35,
fontWeight: 'bold',
alignSelf: 'baseline',
alignContent: 'flex-start',
paddingBottom:10,
paddingLeft: 20,
textAlign: 'left',
},
});	*/

/*const setParamsAction = NavigationActions.setParams({
  title: 'About',
  key: '1',
  count:1,
});*/


/**
 * Screen for second tab.
 * You usually will have this in a separate file.
 */
const styles = StyleSheet.create({
container: {  
flex: 1,   
backgroundColor: '#f5bfce',
alignItems: 'center',
justifyContent: 'center',
},
MyNav: {
          height: 160,
          elevation: 8,
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
