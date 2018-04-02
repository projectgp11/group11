import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import NavigationComponent from './components/BottomNavigationComponent.js'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';


/**
 * Screen for first tab.
 */
export default MyNav = TabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      BottomNavigationOptions: {
        rippleColor: 'white',
		//backgroundColor:'#ff2c2ff',
		tabs: {
          Home: {
		    barbackgroundColor: '#ffc2ff',
          },
          About: {
            barBackgroundColor: '#ffc2ff'
          },
          Settings: {
            barBackgroundColor: '#ffc2ff'
          },
        }
      },
    }
  }
)



const styles = StyleSheet.create({
container: {  
flex: 1,   
backgroundColor: '#00ffffff',
justifyContent: 'center',
},
icon: {
    width: 48,
    height: 48,
  },
});

AppRegistry.registerComponent('MyNav', () => MyNav);

