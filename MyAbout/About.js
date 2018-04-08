import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'


const styles = StyleSheet.create({
/*container: {  
flex: 1,   
backgroundColor: '#f5bfce',
alignItems: 'center',
justifyContent: 'center',
},*/
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
MyNav: {
          height: 160,
          elevation: 8,
          position: 'absolute',
          left: 0,
		  right: 0,
          bottom: 0,

},
});

export default class About extends Component {
  static navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: () => <Icon size={25} name="info" color="white" />
    <AdsManagerStatus
accessibilityLabel={'About' + About.props.status}
status={About.props.status}
  }

  render() {
    return (
      <View>
        <Text>About</Text>
		<Text style={styles.para}>About</Text>
      </View>
	    
  />
    )
  }
}


AppRegistry.registerComponent('About', () => About);
