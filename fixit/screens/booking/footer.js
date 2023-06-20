import { React, useState } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'

import routes from '../../routes'
import PaymentMethod from './payment-method'
const Footer = ({ navigation }) => {
  const theme = useTheme()
  const [isHidden, setIsHidden] = useState(true)

  const toggleComponent = () => {
    setIsHidden(!isHidden)
  }
  return (
    <>
      {isHidden ? null : <PaymentMethod />}
      <View style={styles.container}>
        <View
          style={{
            width: 320,
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: 30,
            paddingBottom: 8,
          }}
        >
          <View style={styles.row}>
            {/* cash */}
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{ width: 25, height: 20,marginVertical:8, }}
            />
            <View style={{ paddingLeft: 12 }}>
              <Text
                style={{
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.subheading.sz_i,
                  color: theme.colors.mainBlue,
                }}
              >
                Cash
              </Text>
              <Text
                style={{
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  color: theme.colors.mainBlue,
                }}
              >
                Rp 100.000
              </Text>
            </View>
          </View>
          <View>
            {/* button pay method */}
            <TouchableOpacity onPress={toggleComponent}>
              <Image
                source={require('../../assets/images/method-icon.png')}
                style={{ width: 40, height: 7,marginVertical:12, }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.successPageRoute)}
        >
          <Text
            style={{
              backgroundColor: theme.colors.mainBlue,
              color: theme.colors.white,
              paddingHorizontal: 130,
              marginHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              fontFamily: theme.typography.family.medium,
              fontSize: theme.typography.body.sz_i,
            }}
          >
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    border: 5,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
  },
})

export default Footer
