import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TextInput,StyleSheet,Image,FlatList} from 'react-native';
import Button from 'react-native-button';
import WaitToExecute from './WaitToExecute'
import {TabBarBottom} from "react-navigation";
import Correction from "./Correction";
import Assessed from './Assessed';
import Assessing from './Assessing';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';



export default class Mission extends Component{
    render(){
        return (
            <ScrollableTabView
                style={{}}
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <WaitToExecute tabLabel='待执行' />
                <Assessing tabLabel='审核中'/>
                <Assessed tabLabel='已审核'/>
            </ScrollableTabView>

        )
    }
}