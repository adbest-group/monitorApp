import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TextInput,StyleSheet,Image,FlatList} from 'react-native';
import Button from 'react-native-button';

export default class ErrorHandled extends Component{
    state={
        data:[
            {
                name:'(下刊监测) 新联路3号灯箱',
                id:'0'
            },
            {
                name:'(投放期间监测) 新联路3号灯箱',
                id:'1'
            },
            {
                name:'(下刊监测) 新联路3号灯箱',
                id:'2'
            },
            {
                name:'(投放期间监测) 新联路3号灯箱',
                id:'4'
            }

        ]
    }
    _renderItem = ({item}) => (
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>
                {item.name}
            </Text>
            <Button
                style={{color:'green'}}
            >
                监测
            </Button>
        </View>

    );

    render() {
        return (
            <FlatList
                ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'grey'}}/>}
                data={this.state.data}
                keyExtractor={(item)=>item.id}
                renderItem={this._renderItem}
            />
        );

    }



}