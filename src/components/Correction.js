import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TextInput,StyleSheet,Image,FlatList} from 'react-native';
import Button from 'react-native-button';
import SubmitError from './SubmitError';
import ErrorHandled from './ErrorHandled'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class Correction extends Component{
    render(){
       return(
           <ScrollableTabView
               style={{}}
               initialPage={0}
               renderTabBar={() => <ScrollableTabBar />}
           >
               <SubmitError tabLabel='已提交纠错' />
               <ErrorHandled tabLabel='已处理完成'/>
           </ScrollableTabView>
       )
    }
}