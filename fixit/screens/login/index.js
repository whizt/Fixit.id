import { Image, ScrollView, StatusBar, View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';

import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IconCrane from '../../components/icons/crane'
import IconPlier from '../../components/icons/plier'

import routes from '../../routes'
import IconMail from '../../components/icons/icon-mail';
import LogRegInput from '../../components/LoginInput';
import IconLock from '../../components/icons/icon-lock';

export function LoginScreen({ navigation }) {
    const theme = useTheme()

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView
            style={{
                backgroundColor:theme.colors.mainBlue,
                alignContent: 'center',
            }}
            >
                <View
                style={{
                    paddingTop: '40%'
                }}
                >
                    <Text
                        style={{
                            color: theme.colors.white,
                            fontSize: 64,
                            textAlign: 'center',
                            alignSelf: 'center',
                            weight: theme.typography.family.bold,
                            fontWeight: '800'
                        }}
                    >
                        Fixit.id
                    </Text>
                   
                    <View style={{ 
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center' ,
                        marginTop: 30
                    }}>
                        <LogRegInput placeholder="Email">
                            <IconMail 
                                style={{
                                    marginTop: 8
                                }}
                            ></IconMail>
                        </LogRegInput>
                        <LogRegInput placeholder="Password">
                            <IconLock
                                style={{
                                    marginTop: 8
                                }}
                            ></IconLock>
                        </LogRegInput>
                        <View 
                            style={{
                                width: 360,
                                height: 20,
                                borderRadius: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                alignContent: 'center',
                                paddingLeft: 20 ,
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        >
                            <Text 
                            style={{
                                fontWeight:'500',
                                textAlign: 'right', 
                                fontSize: 16, 
                                flex:1,
                                color: 'white',
                                marginRight: 10
                            }}>
                                Forgot Password?
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(routes.homePageRoute)}
                            style={{
                            width: 360,
                            height: 40,
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 20,
                            borderRadius: 5,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 1 },
                            shadowOpacity: 1,
                            shadowRadius: 20,
                            elevation: 2, 
                            }}
                        >
                            <Text style={{fontWeight:'800', textAlign: 'center', fontSize: 16}}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(routes.registerRoute)}
                            style={{
                            width: 360,
                            height: 40,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 120,
                            borderRadius: 20,
                            }}
                        >
                            <Text style={{fontWeight:'800', textAlign: 'center', fontSize: 16, color:'white'}}>
                                Make A New Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        </>
    )
}
export default LoginScreen
