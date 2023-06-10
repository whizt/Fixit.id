import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'


//navigators
import Navigator from './navigator'

//utilities
import theme from './theme'
import { LogBox } from 'react-native'

//react native paper
import { Provider } from 'react-native-paper'
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])



export default function App({ navigation, route }) {
  const [fontsLoaded] = useFonts({
    'Jakarta-r': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Jakarta-m': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-sb': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'Jakarta-b': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync()
      }, 100000)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <GestureHandlerRootView style={{ flex: 1, fontFamily: 'Jakarta-m'}}>
      <NavigationContainer onLayout={onLayoutRootView} style={{ backgroundColor:'white' }}>
        <Provider>
          <ThemeProvider theme={theme}>
            <Navigator/>
          </ThemeProvider>
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
