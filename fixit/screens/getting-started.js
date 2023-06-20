import { Image, ScrollView, StatusBar, View, Text, Button } from 'react-native'

import routes from '../routes'

import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IconCrane from '../components/icons/crane'
import IconPlier from '../components/icons/plier'

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
        <View
          style={{
            paddingTop: '50%'
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
            flexDirection: 'row',
            justifyContent: 'center' ,
            marginTop: 40
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.registerRoute)}
            style={{
              width: 140,
              height: 140,
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
            }}
          >
            <IconCrane></IconCrane>
            <Text style={{marginTop:20, fontWeight:'800'}}>
              I'm New Here
            </Text>
          </TouchableOpacity><TouchableOpacity
            onPress={() => navigation.navigate(routes.loginRoute)}
            style={{
              width: 140,
              height: 140,
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
            }}
          >
            <IconPlier></IconPlier>
            <Text style={{marginTop:10, fontWeight:'800', textAlign: 'center'}}>
              I Already Have an Account
            </Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </ScrollView>
    </>
  )
}

export default GettingStartedScreen
