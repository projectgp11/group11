import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FlipToggle from 'react-native-flip-toggle-button'


const styles = StyleSheet.create({
container:{
	flex:1,
	alignItems:'center',
	//justifyContent:'center',
},
toggles: {
	flexDirection:'row',
	width: 120,
	height: 40,
fontSize:18,
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


export default class Settings extends Component {
 static navigationOptions = {
    //tabBarLabel: 'Settings',
    tabBarIcon: () => <Icon size={25} name="settings" color="#ffffff"/>
  }
  constructor(props) {
    super(props);
    this.state = {
      isSwitch1On: true,
      isSwitch2On: false,
	  isSwitch3On:false,
    };
  }
  render() {
    return (
      <View>
        <Text>Settings</Text>
		<Text style={styles.para}>Settings</Text>
	     <Text style={styles.toggles}>Large Text</Text>
  <FlipToggle 
    value={this.state.isSwitch1On}
    buttonWidth={100}
    buttonHeight={50}
    buttonRadius={40}
    sliderWidth={40}
    sliderHeight={15}
	sliderRadius={20}
	buttonOnColor={'#1c2a43'}
	buttonOffColor={'#1c2a43'}
	sliderOnColor={'white'}
	sliderOffColor={'white'}
    onLabel={'On'}
    offLabel={'Off'}
    labelStyle={{ color: 'black' }}
    onToggle={(value) => {
              this.setState({ isSwitch1On: value });
    }}
    onToggleLongPress={() => console.log('toggle long pressed!')}
     />
	 <Text style={styles.toggles}>Vibrate</Text>
  <FlipToggle 
    value={this.state.isSwitch2On}
    buttonWidth={100}
    buttonHeight={50}
    buttonRadius={40}
    sliderWidth={40}
    sliderHeight={15}
	sliderRadius={20}
	buttonOnColor={'#1c2a43'}
	buttonOffColor={'#1c2a43'}
	sliderOnColor={'white'}
	sliderOffColor={'white'}
    onLabel={'On'}
    offLabel={'Off'}
    labelStyle={{ color: 'black' }}
    onToggle={(value) => {
              this.setState({ isSwitch2On: value });
    }}
    onToggleLongPress={() => console.log('toggle long pressed!')}
     />
	 <Text style={styles.toggles}>Colours</Text>
  <FlipToggle 
    value={this.state.isSwitch3On}
    buttonWidth={100}
    buttonHeight={50}
    buttonRadius={40}
    sliderWidth={40}
    sliderHeight={15}
    sliderRadius={20}
	buttonOnColor={'#1c2a43'}
	buttonOffColor={'#1c2a43'}
	sliderOnColor={'white'}
	sliderOffColor={'white'}
    onLabel={'On'}
    offLabel={'Off'}
    labelStyle={{ color: 'black' }}
    onToggle={(value) => {
              this.setState({ isSwitch3On: value });
    }}
    onToggleLongPress={() => console.log('toggle long pressed!')}
     />
	 

	 </View>
     
   )
  }
}



 AppRegistry.registerComponent('Settings', () => Settings)

