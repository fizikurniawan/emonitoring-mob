import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';

import Profile from './Profile';
import Detail from './Detail'
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: '100%', height: '20%', backgroundColor: 'powderblue'}}>
                    <Text>Kontoru</Text>
                </View>
                <View style={{width: '100%', height: '20%', backgroundColor: 'skyblue'}}>
                    <Text>Kontoru</Text>
                </View>
                
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{width: '30%', height: '30%', backgroundColor: 'powderblue'}}> 
                        <Icon style={{textAlign:"center", top: '30%' }} name="facebook" size={40} />
                    </View>
                    <View style={{width: '30%', height: '30%', backgroundColor: 'skyblue'}} />
                    <View style={{width: '30%', height: '30%', backgroundColor: 'steelblue'}} />
                </View>
            </View>
        )
    }
}

export default createBottomTabNavigator(
    {
      Home: Home,
      Profile: Profile
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Profile') {
            iconName = 'user';
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#1976D2',
        inactiveTintColor: 'gray',
      },
    }
  );