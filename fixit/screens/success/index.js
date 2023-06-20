import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import routes from '../../routes'

const SuccessScreen = ({ navigation }) => {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={{ backgroundColor: theme.colors.mainBlue }}>
        <View style={styles.body}>
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 100,
            }}
          >
            <Image source={require('../../assets/images/success-icon.png')} />
            <Text
              style={{
                fontFamily: theme.typography.family.medium,
                color: theme.colors.white,
                fontSize: theme.typography.heading.sz_i,
                paddingHorizontal: 50,
                textAlign: 'center',
                paddingVertical: 24,
              }}
            >
              Your order has booked successfully.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              marginBottom: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('History')}
            >
              <Text
                style={{
                  backgroundColor: theme.colors.white,
                  color: theme.colors.mainBlue,
                  paddingHorizontal: 100,
                  paddingVertical: 10,
                  borderRadius: 5,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                }}
              >
                See transaction details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#253159',
    height: '100%',
    width: '100%',
    marginVertical: 100,
  },
})

export default SuccessScreen
