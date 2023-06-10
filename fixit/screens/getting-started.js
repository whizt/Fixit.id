import { Image, ScrollView, StatusBar, View, Text, Button } from 'react-native'

import routes from '../routes'

import { useTheme } from 'styled-components/native'

export function GettingStartedScreen({ navigation }) {
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
        <Text
            style={{
                color: theme.colors.white,
                fontSize: 64,
                textAlign: 'center',
                alignSelf: 'center',
                weight: theme.typography.family.regular,
            }}
        >
            Fixit.id
        </Text>
        <View style={{ alignItems: 'center' }}>
        <Button
            title="Login"
            onPress={() => navigation.navigate(routes.loginRoute)}
        />
        <Button
            title="Register"
            onPress={() => navigation.navigate(routes.registerRoute)}
        />
        </View>
      </ScrollView>
    </>
  )
}

export default GettingStartedScreen
