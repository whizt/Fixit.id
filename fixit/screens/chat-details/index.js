import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import routes from '../../routes'
import { useTheme } from 'styled-components/native'
import { TextInput } from 'react-native-gesture-handler'

// import BannerSection from './BannerSection';
// import NewReleaseSection from './NewReleaseSection';
// import SectionNavigation from './SectionNavigation';
// import CategorySection from './CategorySection';
// import RecommendationSection from './RecommendationSection';

export function ChatDetailScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        style={{
          backgroundColor: theme.colors.white,
          alignContent: 'center',
        }}
      >
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              backgroundColor: theme.colors.mainBlue,
              paddingHorizontal: 20,
              paddingVertical: 20,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.chatPageRoute)}
            >
              <Image
                source={require('../../assets/images/arrow.png')}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.heading.sz_i,
                paddingLeft: 135,
              }}
            >
              Chat
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderColor: theme.colors.border,
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: 10,
              borderBottomWidth: 3,
            }}
          >
            <Image
              source={require('../../assets/images/history6.png')}
              style={{ width: 50, height: 50 }}
            />
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                alignItems: 'flex-start',
                alignSelf: 'center',
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.heading.sz_i,
                }}
              >
                Yayas
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 20,
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                backgroundColor: theme.colors.border,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.subheading.sz_i,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              Oke, saya akan datang besok
            </Text>
            <Text
              style={{
                color: theme.colors.black,
                fontFamily: theme.typography.family.regular,
                fontSize: theme.typography.subheading.sz_i,
                paddingLeft: 2,
                paddingTop: 3,
              }}
            >
              14:00
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
              marginRight: 20,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                backgroundColor: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.subheading.sz_i,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              Oke, saya akan datang besok
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  paddingLeft: 2,
                  paddingTop: 3,
                  marginRight: 100,
                }}
              >
                Delivered
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  paddingLeft: 2,
                  paddingTop: 3,
                }}
              >
                14:15
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: '90%',
              borderTopWidth: 3,
              borderColor: theme.colors.border,
            }}
          >
            <TextInput
              style={{
                color: theme.colors.mainBlue,
                fontFamily: theme.typography.family.medium,
                fontSize: theme.typography.body.sz_i,
                borderColor: theme.colors.border,
                borderWidth: 1,
                borderRadius: 20,
                paddingLeft: 10,
                paddingVertical: 5,
                marginVertical: 10,
                marginHorizontal: 10,
                paddingRight: 210,
              }}
              placeholder="Enter a message"
            ></TextInput>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginRight: 10,
              }}
              onPress={() => navigation.navigate(routes.chatPageRoute)}
            >
              <Image
                source={require('../../assets/images/send.png')}
                style={{ width: 30, height: 30 }}
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
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
})

export default ChatDetailScreen
