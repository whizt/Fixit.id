import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//utilities
import { View } from 'react-native'
import theme from './theme'
import { useTheme } from 'styled-components/native'
import * as route from './routes'

//icons
import IconHome from './components/icons/icon-home'
import IconChat from './components/icons/icon-chat'
import IconHistory from './components/icons/icon-history'
import IconProfile from './components/icons/icon-profile'

//screens
import HomeScreen from './screens/home'
import ChatScreen from './screens/chat'
import HistoryScreen from './screens/history'
import ProfileScreen from './screens/profile'
import GettingStartedScreen from './screens/getting-started'
import LoginScreen from './screens/login'
import RegisterScreen from './screens/register'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  const theme = useTheme()
  return(
    <Stack.Navigator
      initialRouteName={route.homePageRoute}
      screenOptions={{
        contentStyle:{
          backgroundColor: '#fff',
        },
        animation:'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      <Stack.Screen
        name={route.homePageRoute}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const ChatStack = () => {
  const theme = useTheme()
  return(
    <Stack.Navigator
      initialRouteName={route.homePageRoute}
      screenOptions={{
        contentStyle:{
          backgroundColor: '#fff',
        },
        animation:'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      <Stack.Screen
        name={route.chatPageRoute}
        component={ChatScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const HistoryStack = () => {
  const theme = useTheme()
  return(
    <Stack.Navigator
      initialRouteName={route.homePageRoute}
      screenOptions={{
        contentStyle:{
          backgroundColor: '#fff',
        },
        animation:'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      <Stack.Screen
        name={route.historyPageRoute}
        component={HistoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
const ProfileStack = () => {
  const theme = useTheme()
  return(
    <Stack.Navigator
      initialRouteName={route.homePageRoute}
      screenOptions={{
        contentStyle:{
          backgroundColor: '#fff',
        },
        animation:'slide_from_bottom',
        animationDuration: 150,
      }}
    >
      <Stack.Screen
        name={route.profilePageRoute}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export const Tabs = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                height: 70,
                elevation: 20,
                shadowColor: 'hsla(0, 0, 62, 0.1)',
                shadowOffset: { width: 0, height: -4 },
                },
            }}
        >
            <Tab.Screen
                name = "Home"
                component = {HomeStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                           <IconHome
                                fill={focused ? theme.colors.mainBlue : undefined}
                                stroke={focused ? theme.colors.mainBlue : theme.colors.mainBlue}
                            /> 
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name = "Chat"
                component = {ChatStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                           <IconChat
                                fill={focused ? theme.colors.mainBlue : undefined}
                                stroke={focused ? theme.colors.mainBlue : theme.colors.mainBlue}
                            /> 
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name = "History"
                component = {HistoryStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                           <IconHistory
                                fill={focused ? theme.colors.mainBlue : undefined}
                                stroke={focused ? theme.colors.mainBlue : theme.colors.mainBlue}
                            /> 
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name = "Profile"
                component = {ProfileStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                           <IconProfile
                                fill={focused ? theme.colors.mainBlue : undefined}
                                stroke={focused ? theme.colors.mainBlue : theme.colors.mainBlue}
                            /> 
                        </View>
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
export const Navigator = () =>{
    const theme = useTheme()
    // const {isAuthenticated} = useAuthStore()

    return(
        // ganti initial route dibawah sesuai dengan page mana yang mau kalian edit agar langsung muncul
        <Stack.Navigator
            initialRouteName={route.gettingStartedRoute}
            screenOptions={{
                contentStyle:{
                backgroundColor: '#fff',
                },
                animation:'slide_from_bottom',
                animationDuration: 150,
            }}
        >
        {/* is authenticate sementara dimatikan karena berhubungan dengan login dan register */}
            {/* { isAuthenticated ? ( */}
                {/* // User is signed in */}
                <Stack.Screen
                    name={route.homePageRoute}
                    component={Tabs}
                    options={{
                        headerShown: false,
                    }}
                />
            {/* ) : ( */}
                {/* // User is not signed in */}
                {/* <> */}
                {/* Getting started Route */}
                    <Stack.Screen
                        name={route.gettingStartedRoute}
                        component={GettingStartedScreen}
                        options={{
                        headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name={route.loginRoute}
                        component={LoginScreen}
                        options={{
                            title: 'Sign In',
                        }}
                    />
                    <Stack.Screen
                        name={route.registerRoute}
                        component={RegisterScreen}
                        options={{
                            title: 'Register',
                        }}
                    />
                {/* </> */}
            {/* )} */}
        </Stack.Navigator>
    )
}

export default Navigator