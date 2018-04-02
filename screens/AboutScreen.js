import React from 'react';
import { ScrollView, View, StyleSheet, Text} from 'react-native';
import NavigationComponent from '../components/BottomNavigationComponent.js'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SettingsScreen from  './SettingsScreen.js'
var s = require('../constants/MyStyles.js');

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
	tabBarIcon: () => <Icon size={46}  name="info" style={{ color: '#012541' }}/>
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={s.h2}>About</Text>
        <Text style={s.p}>Welcome to ExpeARience, an app designed to provide audio information about the different departments of DCU. </Text>

        <Text style={s.p}>To use, hold your phone upright in front of you, with the camera facing outwards. </Text>

        <Text style={s.p}>When your phone camera detects a point of interest, the phone will vibrate briefly, and a short introduction will play.  
                          Each introduction leads to an interview, approximately two minutes long. </Text>

         <Text style={s.p}>If you wish to listen to the interview, tap to continue. You may skip or pause playback at any time. 
        </Text>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
	paddingLeft:15,
    backgroundColor: '#fff',
	marginTop:10,
	marginBottom:5,
  },
});
