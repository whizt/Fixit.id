import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'

import routes from '../../routes'

const Footer = ({navigation}) => {
  const theme = useTheme()
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Chat')}>
          <View
            style={{
              padding: 10,
              borderColor: theme.colors.grey1,
              borderWidth: 1,
              borderRadius: 5,
              // marginVertical:4,
            }}
          >
            <Image source={require('../../assets/images/chat-icon.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.bookingPageRoute)}
        >
          <Text
            style={{
              backgroundColor: theme.colors.mainBlue,
              color: theme.colors.white,
              paddingHorizontal: 130,
              paddingVertical: 10,
              borderRadius: 5,
              fontFamily: theme.typography.family.medium,
              fontSize: theme.typography.body.sz_i,
            }}
          >
            Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    border: 5,
    // backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    margin: 0,
  },
})

export default Footer
