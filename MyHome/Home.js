import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RNCamera, FaceDetector } from 'react-native-camera';


const styles = StyleSheet.create({
/*container: {  
flex: 1,   
backgroundColor: '#f5bfce',
alignItems: 'center',
justifyContent: 'center',
},*/
/*heading: {
marginBottom:30,
fontSize: 35,
fontWeight: 'bold',
alignSelf: 'baseline',
alignContent: 'flex-start',
paddingBottom:10,
paddingLeft: 20,
textAlign: 'left',
},*/
container: {  
flex: 1,   
backgroundColor: '#00ffffff',
justifyContent: 'center',
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

/*const styles = StyleSheet.create({
container: {  
flex: 1,   
backgroundColor: '#f5bfce',
alignItems: 'center',
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
});	*/

/*const setParamsAction = NavigationActions.setParams({
  title: 'About',
  key: '1',
  count:1,
});*/


/**
 * Screen for second tab.
 */
export default class Home extends Component {
  static navigationOptions = {
	tabBarLabel: '',
    tabBarIcon: () => <Icon size={25} name="home" color="white"/>
  }
  render() {
    return (
      <View>
        <Text>Home</Text>
		<Text style={styles.para}>Home</Text>
      </View>
   )
  }
}




AppRegistry.registerComponent('Home', () =>Home);
