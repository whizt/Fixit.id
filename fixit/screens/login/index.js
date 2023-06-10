import { ScrollView, StatusBar } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { TouchableOpacity, Text, Button } from 'react-native'

import routes from '../../routes'

export function LoginScreen({ navigation }) {
    const theme = useTheme()
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView>
                <Button
                    title='Log in'
                    onPress={() => navigation.navigate(routes.homePageRoute)}


                />
                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.registerRoute)}
                >
                    <Text>
                    Register Now
                    </Text>
                </TouchableOpacity>
            </ScrollView> 
        </>
    )
}
export default LoginScreen
