import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Button } from 'react-native'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { RNCamera, FaceDetector, Camera} from 'react-native-camera';


export default class Home extends PureComponent<void, *, void> {
  static navigationOptions = {
	tabBarLabel: '',
    tabBarIcon: () => <Icon size={25} name="home" color="white"/>
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden
        />
        <Camera
          ref={(cam) => {
            this.props.setCam(cam);
          }}
          captureQuality={Camera.constants.CaptureQuality['480p']}
          captureTarget={Camera.constants.CaptureTarget.memory}
          playSoundOnCapture={false}
          jpegQuality={40}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        />
        {this.props.children}
      </View>
    );
  }
}


const styles = StyleSheet.create({

container: {  
flex: 1,   
backgroundColor: '#00ffffff',
justifyContent: 'center',
},
preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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




/**
 * Screen for second tab.

export default class Home extends Component {
  
  render() {
    return (
      <View>
        <Text>Home</Text>
		<Text style={styles.para}>Home</Text>
      </View>
   )
  }
}*/




AppRegistry.registerComponent('Home', () =>Home);
