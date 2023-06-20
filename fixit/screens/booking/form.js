import { React, useState } from 'react'
import {
  Image,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BookingForm = () => {
  const theme = useTheme()
  return (
    <>
        <View style={styles.body}>
          <View>
            <Text
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                paddingBottom: 8,
              }}
            >
              Details
            </Text>
            <View style={styles.container}>
              <TextInput
                style={{
                  color: theme.colors.mainBlue,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.body.sz_i,
                }}
                placeholder="Type detail"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                paddingBottom: 8,
              }}
            >
              Photo Attachment
            </Text>
            <View style={styles.container}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>+</Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                paddingBottom: 8,
              }}
            >
              Date
            </Text>
            <View style={styles.container}>
              <TextInput
                style={{
                  color: theme.colors.mainBlue,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.body.sz_i,
                }}
                placeholder="18    |    Juni    |    2023"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                paddingBottom: 8,
              }}
            >
              Time
            </Text>
            <View style={styles.container}>
              <TextInput
                style={{
                  color: theme.colors.mainBlue,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.body.sz_i,
                }}
                placeholder="18 : 00"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                paddingBottom: 8,
              }}
            >
              Address
            </Text>
            <View style={styles.container}>
              <View style={styles.row}>
                <Text
                style={{paddingVertical:6}}
                >Home</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: theme.colors.white }}>
                    Change Location
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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

export default BookingForm
