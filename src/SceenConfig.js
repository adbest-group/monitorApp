import React, {Component} from 'react';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import LogIn from './pages/LogIn'
import {
    Text, Image, View, Platform
} from 'react-native';
import Mission from './components/Mission';
import Correction from './components/Correction';
import WaitToExecute from "./components/WaitToExecute";


const HomeNavigator = TabNavigator({
        Mission: {
            screen: Mission,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
                    focused
                        ? <Text style={{color:'blue'}}>任务</Text>
                        : <Text style={{color:'green'}}>任务</Text>
                )
            }
        },
        Correction: {
            screen: Correction,
            navigationOptions: {
                tabBarIcon: ({tintColor, focused}) => (
                    focused
                        ? <Text style={{color:'blue'}}>纠错</Text>
                        : <Text style={{color:'green'}}>纠错</Text>

                )

            }
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        initialRouteName: 'Mission',
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTextColor: '#000000',
            fontSize: 12,
            inactiveTextColor: '#f5a623',
            style: {
                backgroundColor: '#f6f4f4',
                height: 44
            }
        }
    })



const MainNavigation = StackNavigator({
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            headerTitle: null
        }
    },
    WaitToExecute: {
        screen: WaitToExecute,
        navigationOptions: {
            headerTitle: null
        }
    },
    HomeNavigator: {
        screen: HomeNavigator,
    },

}, {
    headerMode: 'screen',

})


export default MainNavigation;