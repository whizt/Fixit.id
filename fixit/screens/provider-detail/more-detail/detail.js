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

const ProviderDetail = () => {
  const theme = useTheme()
  return (
    <>
      <View>
        <Text
          style={{
            fontFamily: theme.typography.family.bold,
            fontSize: theme.typography.heading.sz_i,
            color: theme.colors.black,
          }}
        >
          Service Detail
        </Text>
        <View style={styles.row}>
          <Text style={{ color: theme.colors.border }}>Category</Text>
          <Text
            style={{
              paddingLeft: 16,
              color: theme.colors.mainBlue,
              fontFamily: theme.typography.family.bold,
            }}
          >
            AC
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={{ color: theme.colors.border }}>Service</Text>
          <Text
            style={{
              paddingLeft: 16,
              color: theme.colors.mainBlue,
              fontFamily: theme.typography.family.bold,
            }}
          >
            Service AC
          </Text>
        </View>
      </View>
      <View style={{paddingTop:16,}}>
        <Text
          style={{
            fontFamily: theme.typography.family.bold,
            fontSize: theme.typography.heading.sz_i,
            color: theme.colors.black,
          }}
        >
          Description
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
          aliquam sem et tortor. Consectetur adipiscing elit duis tristique
          sollicitudin nibh sit. Faucibus et molestie ac feugiat sed. Odio
          aenean sed adipiscing diam donec adipiscing tristique risus. Tincidunt
          vitae semper quis lectus.
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
    borderBottomColor: '#485578',
    paddingTop: 8,
  },
})

export default ProviderDetail
