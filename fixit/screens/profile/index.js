import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native'
import routes from '../../routes'
import { useTheme } from 'styled-components/native'

export function ProfileScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        style={{
          backgroundColor: theme.colors.mainBlue,
          alignContent: 'center',
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 20,
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.heading.sz_i,
                paddingRight: 105,
              }}
            >
              User Profile
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.editProfilePageRoute)}
            >
              <Image
                source={require('../../assets/images/edit.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/images/intersect.png')}
            style={{
              width: 125,
              height: 125,
              alignSelf: 'center',
              marginBottom: 20,
            }}
          />
          <View
            style={{
              flex: 1,
              marginBottom: 3,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/profile_icon.png')}
              style={{ width: 20, height: 20, alignSelf: 'center' }}
            />
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.body.sz_i,
                paddingLeft: 17,
              }}
            >
              Bambang Pamu
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginVertical: 3,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/Email.png')}
              style={{ width: 20, height: 15, alignSelf: 'center' }}
            />
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.body.sz_i,
                paddingLeft: 16,
              }}
            >
              Bambang@gmail.com
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 3,
              flexDirection: 'row',
              alignSelf: 'center',
            }}
          >
            <Image
              source={require('../../assets/images/Phone.png')}
              style={{ width: 18, height: 18, alignSelf: 'center' }}
            />
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.body.sz_i,
                paddingLeft: 16,
              }}
            >
              081123456789
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              paddingTop: 40,
              paddingBottom: 60,
              paddingHorizontal: 40,
              borderColor: theme.colors.white,
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              borderWidth: 1,
              backgroundColor: theme.colors.white,
              alignSelf: 'center',
            }}
          >
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/worker_bar.png')}
                style={{ width: 320, height: 40, marginBottom: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/payment_bar.png')}
                style={{ width: 320, height: 40, marginBottom: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/user_bar.png')}
                style={{ width: 320, height: 40, marginBottom: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/change_bar.png')}
                style={{ width: 320, height: 40, marginBottom: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(routes.gettingStartedRoute)}>
              <Image
                source={require('../../assets/images/log_bar.png')}
                style={{ width: 320, height: 40, marginBottom: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ProfileScreen
