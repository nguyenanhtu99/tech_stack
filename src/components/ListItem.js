import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import * as actions from '../actions';
import { TouchableOpacity } from 'react-native';

class RenderItem extends Component {
    render() {
        const { id, title } = this.props.library.item;
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </TouchableOpacity>
        )
    }
}

export default connect(null, actions)(RenderItem);