import React, { PureComponent } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native'
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
MyNav: {
          height: 160,
          elevation: 8,
          position: 'absolute',
		  left: 0,
		  right: 0,
          bottom: 0,
   },
});






AppRegistry.registerComponent('Home', () =>Home);
