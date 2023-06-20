import { ScrollView, StatusBar } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { TouchableOpacity, Text, Button, View } from 'react-native'

import routes from '../../routes'
import LogRegInput from '../../components/LoginInput'
import IconPerson from '../../components/icons/icon-person-reg'
import { useState } from 'react'
import IconBuilder from '../../components/icons/icon-builder'
import IconMail from '../../components/icons/icon-mail'
import IconLock from '../../components/icons/icon-lock'
import IconPersonSmall from '../../components/icons/icon-person-small'
import IconPinPoint from '../../components/icons/icon-pinpoint'
import IconCalendar from '../../components/icons/icon-calendar'

export function RegisterScreen({ navigation }) {
    const theme = useTheme()
    const [role, setRole] = useState(0)
    const [agree, setAgree] = useState(false)

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
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center' ,
                }}>
                    <Text
                        style={{
                            color:'white',
                            fontSize: 26,
                            marginTop: 20,
                            marginBottom: 10
                        }}
                    >
                        Create an account
                    </Text>
                    <LogRegInput placeholder='Name'>
                        <IconPersonSmall style={{ marginTop: 8}}></IconPersonSmall>
                    </LogRegInput>
                    <LogRegInput placeholder='Email'>
                        <IconMail style={{ marginTop: 8}}></IconMail>
                    </LogRegInput>
                    <LogRegInput placeholder='Address'>
                        <IconPinPoint style={{ marginTop: 8}}></IconPinPoint>
                    </LogRegInput>
                    <LogRegInput placeholder='Password'>
                        <IconLock style={{ marginTop: 8}}></IconLock>
                    </LogRegInput>
                    <LogRegInput placeholder='ConfirmPassword'>
                        <IconLock style={{ marginTop: 8}}></IconLock>
                    </LogRegInput>
                    <LogRegInput placeholder='Date of Birth'>
                        <IconCalendar style={{ marginTop: 8}}></IconCalendar>
                    </LogRegInput>
                    
                    
                    <View style={{ 
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center' ,
                    }}>
                        <TouchableOpacity
                            onPress={() => setRole(1)}
                            style={{
                            width: 150,
                            height: 150,
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 20,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 1 },
                            shadowOpacity: 1,
                            shadowRadius: 20,
                            elevation: 2, 
                            opacity: (role == 1) ? 1 : .5
                            }}
                        >
                            <View style={{
                                backgroundColor: (role == 1) ? '#253159': '#777',
                                height: 20,
                                width: 20,
                                borderRadius: 20,
                                marginLeft: 100
                                }}>
                            </View>
                            <IconPerson></IconPerson>
                            <Text style={{marginTop:0, fontWeight:'800'}}>
                            I'm A Customer
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setRole(2)}
                            style={{
                            width: 150,
                            height: 150,
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 20,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: { width: 2, height: 1 },
                            shadowOpacity: 1,
                            shadowRadius: 20,
                            elevation: 2, 
                            opacity: (role == 2) ? 1 : .5
                            }}
                        >
                            <View style={{
                                backgroundColor: (role == 2) ? '#253159': '#777',
                                height: 20,
                                width: 20,
                                borderRadius: 20,
                                marginLeft: 100
                                }}>
                            </View>
                            <IconBuilder></IconBuilder>
                            <Text style={{marginTop:0, fontWeight:'800'}}>
                            I Provide a Service
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ 
                        alignItems: 'flex-start',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start' ,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor:  (agree) ? '#7d2': '#fff',
                            height: 20,
                            width: 20,
                            borderRadius: (agree) ? 20: 0
                            }}
                            onPress={() => setAgree(!agree)}>
                            
                        </TouchableOpacity>
                        <Text style={{color:'white', marginLeft: 20, marginRight: 120}}>
                            I Accept all Terms and Service
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(routes.loginRoute)}
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
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(routes.loginRoute)}
                        style={{
                        width: 360,
                        height: 40,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 20,
                        }}
                    >
                        <Text style={{fontWeight:'300', textAlign: 'center', fontSize: 16, color:'white'}}>
                            Already have an account? Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
export default RegisterScreen
