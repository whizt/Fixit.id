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
import { TextInput } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import BookingForm from './form'
import Footer from './footer'
import routes from '../../routes'

const BookingScreen = ({ navigation }) => {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.mainBlue,
            flexDirection: 'row',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.providerDetailPageRoute)}
          >
            <Image
              source={require('../../assets/images/back-button.png')}
              style={{ width: 30, height: 30, margin: 16 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: theme.typography.family.bold,
              fontSize: theme.typography.heading.sz_i,
              paddingVertical: 16,
            }}
          >
            Booking
          </Text>
        </View>
        <View style={styles.body}>
          <BookingForm />
        </View>
        <Footer navigation={navigation} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#485578',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 25,
  },
  body: {
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#253159',
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
})

export default BookingScreen
