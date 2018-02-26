import React, { Component } from 'react';
import { Text, TouchableHighlight, View, TextInput,StyleSheet,Image} from 'react-native';
import Button from 'react-native-button';

export default class LogIn extends Component {
    state = {
        userID: 'UserID',
        pwd:'password',
        verify:''
    };
    render() {
        return (
            <View>
                <View style={styles.input}>
                    <Text>用户名</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:300}}
                        onChangeText={(userID) => this.setState({userID})}
                        value={this.state.userID}
                    />
                </View>
                <View style={styles.input}>
                    <Text>密码</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:300}}
                        onChangeText={(pwd) => this.setState({pwd})}
                        value={this.state.pwd}
                    />
                </View>
                <View style={styles.input}>
                    <Text>验证码</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:150}}
                        onChangeText={(verify) => this.setState({verify})}
                        value={this.state.verify}
                    />
                    <Image
                        style={{marginLeft:50,width:40,height:40,backgroundColor:'red'}}
                        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                    />
                </View>


                <Button
                    containerStyle={{alignSelf:'center' ,padding:10, width:300,height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'skyblue'}}
                    style={{fontSize: 20, color: '#fff'}}
                    styleDisabled={{color: 'red'}}
                    onPress={()=>this.state.verify==''?alert('输入验证码'):
                        this.props.navigation.navigate('HomeNavigator')
                    }
                    >
                    登陆
                </Button>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    input: {
        flexDirection:'row'
    },

});