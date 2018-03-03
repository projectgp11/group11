import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    TextInput,
    View,
    NavigatorIOS
} from 'react-native';
import {bind} from '../utils/utils';
import PlacesApi from '../api/mockPlacesApi';
import PlacesList from '../components/PlacesList';
 
class Search extends Component {
    
    constructor(props, context) {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props, context);
        this.state = {
            text: 'Search by name',
            dataSource: ds.cloneWithRows([])
        };
        
        bind(this)('_searchInputOnChange', '_getAllPlacesAndUpdateData')
    }
    
    componentDidMount() {
        this._getAllPlacesAndUpdateData();
    }
    
    _getAllPlacesAndUpdateData() {
        PlacesApi.getAllEmployees()
            .then(function (data) {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(data),
                    isLoading: false
                })
            }.bind(this));
    }
    
    _searchInputOnChange(text) {
        if (text.length < 1) {
            this._getAllEmployeesAndUpdateData();
            this.setState({
                text
            });
        }
        
        PlacesApi.searchPlaceByName(text)
            .then(function (res) {
                this.setState({
                    text,
                    dataSource: this.state.dataSource.cloneWithRows(res)
                })
            }.bind(this))
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchInput}
                    autoCorrect={false}
                    clearTextOnFocus={true}
                    value={this.state.text}
                    onChangeText={this._searchInputOnChange}/>
                <PlacesList
                    dataSource={this.state.dataSource}
                    navigator={this.props.navigator}/>
            </View>
        )
    }
}
 
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    searchInput: {
        height: 44,
        margin: 10,
        marginTop: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC'
    }
});
 
 
export default Search;