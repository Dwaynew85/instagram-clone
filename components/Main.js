import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Main extends Component {
    componentDidMount
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>User is logged in</Text>
            </View>
        )
    }
}

export default Main
