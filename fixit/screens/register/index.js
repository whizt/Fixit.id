import { ScrollView, StatusBar } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { TouchableOpacity, Text, Button } from 'react-native'

import routes from '../../routes'

export function RegisterScreen({ navigation }) {
    const theme = useTheme()
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <ScrollView>
                <Button
                    title='Register'
                    onPress={() => navigation.navigate(routes.homePageRoute)}


                />
                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.loginRoute)}
                >
                    <Text>
                    Already have an account?
                    </Text>
                </TouchableOpacity>
            </ScrollView> 
        </>
    )
}
export default RegisterScreen
