import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Text } from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{
                                color: focused? 'green' : 'grey',
                                fontSize: 12
                            }}>
                                Home
                            </Text>
                        )
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name='home'
                                type='material-community'
                                color={focused ? 
                                      'purple' : 'grey'}
                                size={24}
                            />
                          )
                    },
                    tabBarLabelPosition:'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{
                                color: focused? 'green' : 'grey',
                                fontSize: 12
                            }}>
                                Profile
                            </Text>
                        )
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name='account'
                                type='material-community'
                                color={focused ? 
                                      'purple' : 'grey'}
                                size={24}
                            />
                          )
                    },
                    tabBarLabelPosition:'below-icon',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />
        </Tab.Navigator>
    )
};

const MainNavigator = () => {
    const isLogin = useSelector(store => 
        store.profileReducer.isLogin);

    return (
        <NavigationContainer>
            {
            isLogin ?
                <Stack.Navigator  
                    initialRouteName="Start">
                    <Stack.Screen
                        name="Start"
                        component={StartScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
                :
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{
                            headerTitleAlign: 'center',
                            headerLeft: null
                        }}
                    /> 
                </Stack.Navigator>
        }
        </NavigationContainer>
    )
};

export default MainNavigator;