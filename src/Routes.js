import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator} from 'react-navigation';

//import screens
import Home from './screens/Home'
import Detail from './screens/Detail';


export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },  
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Detail'
        }
    }
});