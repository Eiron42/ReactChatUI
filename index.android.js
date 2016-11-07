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
  ScrollView,
  KeyboardAvoidingView,
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
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.wrapper}>
                        {
                            this.state.messages.map((message) => {
                                return (
                                    <View key={message.id} style={styles.messageWrapper, message.userId === 1 ? styles.userMessagesWrapper : styles.otherUserMessagesWrapper}>
                                        <Text style={message.userId === 1 ? styles.userMessages : styles.otherUserMessages}>{message.content}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your message"
                        ref= "message"
                        onChangeText={(message) => this.state.message = message}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress={() => this.send()}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingTop: 5,
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    wrapper: {
        marginHorizontal: 10
    },
    userMessagesWrapper: {
        marginBottom: 10,
        paddingLeft: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    otherUserMessagesWrapper: {
        marginBottom: 10,
        paddingRight: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    userMessages: {
        flex: 0,
        padding: 5,
        backgroundColor: 'cornflowerblue'
    },
    otherUserMessages: {
        flex: 0,
        padding: 5,
        backgroundColor: 'darkseagreen'
    },
    inputWrapper: {
        height: 40,
        flexDirection: 'row'
    },
    textInput: {
        flex: 9,
        height: 40,
        backgroundColor: 'darkgray'
    },
    submitButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    }
});

AppRegistry.registerComponent('ReactChatUI', () => ReactChatUI);
