import React from 'react';
import { Text } from 'react-native';
import { blockbusterYellow } from '../utils/AppConstants';

export default class BasicHeader extends React.Component {
    render() {
        return (
            <Text style={{fontWeight: "bold", fontSize: 20, color: blockbusterYellow}}>Cast:</Text>
        );
    }
}