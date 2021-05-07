import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import RenderItem from './ListItem';

class LibraryList extends Component {

    renderList = (library) => (
        <RenderItem
            library={library}
        />
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.libraries}
                    keyExtractor={item => item.id}
                    renderItem={this.renderList}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}
 
export default connect(mapStateToProps)(LibraryList);