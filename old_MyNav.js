import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from './MyHome/MyCamera.js';
import About from './MyAbout/About.js';
import Settings from './MySettings/Settings.js';

/**
 * Screen for first tab.
 */
export default MyNav = TabNavigator(
  {
    Home: Home,
    About: About,
    Settings: Settings,
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor:'transparent'
        rippleColor: 'white',
        tabs: {
          Home: {
            barBackgroundColor: '#1c2a43'
			
          },
          About: {
            barBackgroundColor: '#1c2a43'
          },
          Settings: {
            barBackgroundColor: '#1c2a43'
          }
        }
      }
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    backgroundColor: 'transparent'
  },
  label: {
    fontSize: 6,
    width: 168,
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
});
/*

const styles = StyleSheet.create({
container: {  
flex: 1.75,   
backgroundColor: '#00ffffff',
justifyContent: 'center',
},
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
para: {
	fontSize: 21,
	color: '#1c2a43',
	fontWeight:'500',
	marginTop:10,
	alignSelf: 'center',
},	
pix: {
	marginTop:30,
	marginBottom:30,
	marginLeft:10,
	width: 220,
	height: 200,
    alignItems: 'center',
},
icon: {
    width: 35,
    height: 35,
  },
});

const params = NavigationActions.setParams({
  title: 'Home',
  key: '0',
});
 */
AppRegistry.registerComponent('MyNav', () => MyNav)

