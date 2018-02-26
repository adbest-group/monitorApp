import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TextInput,StyleSheet,Image,FlatList,Dimensions} from 'react-native';
import Button from 'react-native-button';
import ModalDropdown from 'react-native-modal-dropdown';
const {width, height} = Dimensions.get('window');

export default class Assessed extends Component{
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
                查看
            </Button>
        </View>

    );

    render(){

        return (
            <View>
                <ModalDropdown
                    defaultValue='全部'
                    style={{width:0.5*width,height:40,borderColor:'#333',borderWidth:1,justifyContent:'center'}}
                    textStyle={{fontSize:14,lineHeight:40,paddingLeft:15}}
                    dropdownStyle={{width:0.5*width,borderWidth:0}}
                    dropdownTextStyle={{fontSize:14,paddingLeft:15}}
                    options={['全部', '已通过','未通过']}/>
                <FlatList
                    ItemSeparatorComponent={()=><View style={{height:1,backgroundColor:'grey'}}/>}
                    data={this.state.data}
                    keyExtractor={(item)=>item.id}
                    renderItem={this._renderItem}
                />
            </View>


        )
    }


}