import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import * as actions from '../actions';
import { TouchableOpacity } from 'react-native';

class RenderItem extends Component {

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <ListItem.Subtitle>{library.item.description}</ListItem.Subtitle>
            )
        }
    }

    render() {
        const { id, title } = this.props.library.item;
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
            >
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{title}</ListItem.Title>
                        {this.renderDescription()}
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(RenderItem);