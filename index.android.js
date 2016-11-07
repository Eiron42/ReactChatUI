/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

export default class ReactChatUI extends Component {
    constructor() {
        super()

        this.state = {
            lastId: 4,
            userId: 1,
            message: '',
            messages: [
                {
                    id: 1,
                    userId: 1,
                    content: "Hello !"
                },
                {
                    id: 2,
                    userId: 2,
                    content: "Hi !"
                },
                {
                    id: 3,
                    userId: 1,
                    content: "How are you ?"
                },
                {
                    id: 4,
                    userId: 2,
                    content: "Fine, and you ?"
                }
            ]
        }
    }

    send() {
        if (this.state.message != '') {
            this.state.lastId += 1
            this.state.messages.push({
                id: this.state.lastId,
                userId: this.state.userId,
                content: this.state.message
            })
            this.state.message = ''
            this.refs['message'].setNativeProps({text: ''})

            this.setState(this.state)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    {
                        this.state.messages.map((message) => {
                            return (
                                <Text key={message.id} style={message.userId === 1 ? styles.userMessages : styles.otherUserMessages}>{message.content}</Text>
                            )
                        })
                    }
                </View>
                <TextInput
                    style={{height: 40, backgroundColor:"grey"}}
                    placeholder="Type your message"
                    ref= "message"
                    onChangeText={(message) => this.state.message = message}
                />
            <TouchableOpacity style={styles.submitButton} onPress={() => this.send()}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    wrapper: {
        marginHorizontal: 10
    },
    userMessages: {
        backgroundColor: 'cornflowerblue',
        marginBottom: 10,
        marginLeft: 70,
        padding: 5
    },
    otherUserMessages: {
        backgroundColor: 'darkseagreen',
        marginBottom: 10,
        marginRight: 70,
        padding: 5
    },
    submitButton: {
        marginTop: 10
    }
});

AppRegistry.registerComponent('ReactChatUI', () => ReactChatUI);
