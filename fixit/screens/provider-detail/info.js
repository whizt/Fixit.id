import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { useTheme } from 'styled-components/native'

const ProviderDetailInfo = () => {
  const theme = useTheme()
  return (
    <>
      <View style={styles.info}>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Image source={require('../../assets/images/rating-icon.png')} />
            <Text
              style={{
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.subheading.sz_i,
                color: theme.colors.black,
                paddingLeft: 5,
              }}
            >
              4.5
            </Text>
          </View>
          <Text
            style={{
              fontFamily: theme.typography.family.regular,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.border,
            }}
          >
            Rating
          </Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Image source={require('../../assets/images/location-icon.png')} />
            <Text
              style={{
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.subheading.sz_i,
                color: theme.colors.black,
                paddingLeft: 5,
              }}
            >
              0.34 KM
            </Text>
          </View>
          <Text
            style={{
              fontFamily: theme.typography.family.regular,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.border,
            }}
          >
            Distance
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text
            style={{
              fontFamily: theme.typography.family.bold,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.black,
            }}
          >
            07:00 - 17:00
          </Text>
          <Text
            style={{
              fontFamily: theme.typography.family.regular,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.border,
            }}
          >
            Operational Hour
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text
            style={{
              fontFamily: theme.typography.family.bold,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.black,
            }}
          >
            7 Years
          </Text>
          <Text
            style={{
              fontFamily: theme.typography.family.regular,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.border,
            }}
          >
            Partner with us
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  info: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
})

export default ProviderDetailInfo
