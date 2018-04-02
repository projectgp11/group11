import React from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native'
import NavigationComponent from '../components/BottomNavigationComponent.js'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import FlipToggle from 'react-native-flip-toggle-button'
var s = require('../constants/MyStyles.js');
//import InvertColor from '../constants/Invert.js'

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop:15,
	paddingBottom: 120,
    backgroundColor: '#fff',
	alignItems:'center',
	justifyContent:'center',
},	

});

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    //tabBarLabel: 'Settings',
	tabBarIcon: () => <Icon size={46}  name="settings" style={{ color: s.IconAColor.color }}'/>
  }
   constructor(props) {
    super(props);
    this.state = {
      isSwitch1On: false,
      isSwitch2On: false,
	  isSwitch3On: false,
    };
  }
  render() {
    return (
	<View style={styles.container}>
		<Text style={s.h3}>Settings</Text>
	    <Text style ={[s.textbig, this.state.isSwitch1On && s.textbigger]}>Larger Text</Text>
  <FlipToggle 
    style={s.toggles} value={this.state.isSwitch1On}
    buttonWidth={100}
    buttonHeight={50}
    buttonRadius={40}
    sliderWidth={40}
    sliderHeight={15}
	sliderRadius={20}
	buttonOnColor={'#012541'}
	buttonOffColor={'#012541'}
	sliderOnColor={'#ffc2ff'}
	sliderOffColor={'#ffc2ff'}
    onLabel={'On'}
    offLabel={'Off'}
    labelStyle={{ color: 'black' }}
    onToggle={(value) => {
              this.setState({ isSwitch1On: value });
    }}
    onToggleLongPress={() => console.log('toggle long pressed!')}
     />
	 <Text style={[s.textbig, this.state.isSwitch1On && s.textbigger]}>Invert Colours</Text>
  <FlipToggle style={s.toggles}
    value={this.state.isSwitch2On}
    buttonWidth={100}
    buttonHeight={50}
    buttonRadius={40}
    sliderWidth={40}
    sliderHeight={15}
	sliderRadius={20}
	buttonOnColor={'#012541'}
	buttonOffColor={'#012541'}
	sliderOnColor={'#ffc2ff'}
	sliderOffColor={'#ffc2ff'}
    onLabel={'On'}
    offLabel={'Off'}
    labelStyle={{ color: 'black' }}
    onToggle={(value) => {
              this.setState({ isSwitch2On: value });
    }}
    onToggleLongPress={() => console.log('toggle long pressed!')}
     />
	</View>
  );
  }
}
