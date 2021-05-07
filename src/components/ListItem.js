import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import * as actions from '../actions';

class RenderItem extends Component {
    render() {
        console.log(this.props.library)
        return (
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title>{this.props.library.item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
        )
    }
}

export default connect(null, actions)(RenderItem);