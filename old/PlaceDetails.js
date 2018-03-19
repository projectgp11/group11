import React, {PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
 
const PlaceDetails = ({place}) => (
    <View style={styles.place}>
        <Image style={styles.cover}
               source={{uri: place.picture.large}}/>
        <View style={styles.info}>
            <Text style={styles.name}>
                {`${place.name.first.toUpperCase()} ${place.name.last.toUpperCase()}`}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Function: </Text>
                {place.purpose}
            </Text>
            <Text>
                <Text style={styles.fontBold}>Email: </Text>
                {place.email}
            </Text>
        </View>
    </View>
);
 
PlaceDetails.propTypes = {
    ...View.propTypes,
    place: PropTypes.object.isRequired
};
 
const styles = StyleSheet.create({
    place: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 40,
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    cover: {
        flex: 1,
        height: 150,
        marginTop: 40,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    name: {
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#222222'
    },
    fontBold: {
        fontWeight: '700'
    }
});
 
export default PlaceDetails;
