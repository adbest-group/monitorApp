import React, { Component } from 'react';
import { Text,View,Dimensions } from 'react-native';
import LogIn from './src/pages/LogIn'
import WaitToExecute from "./src/components/WaitToExecute";
import Assessing from "./src/components/Assessing";
import Assessed from "./src/components/Assessed";
import MainNavigater from './src/SceenConfig'
const {height, width} = Dimensions.get('window');
export default class HelloWorldApp extends Component {

    render() {
        return (
            <MainNavigater/>
        );
    }
}