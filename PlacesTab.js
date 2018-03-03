import React from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';
import Places from './Places';
 
 
const PlacesTab = ({props}) => (
    <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'Places',
            component: PlacesTab
        }}/>
);
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export default PlacesTab;