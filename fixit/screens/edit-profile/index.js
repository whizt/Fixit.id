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

export function EditProfileScreen({ navigation }) {
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
              alignSelf: 'flex-start',
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.profilePageRoute)}
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
                paddingLeft: 90,
              }}
            >
              Edit User Profile
            </Text>
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
              paddingTop: 30,
              paddingBottom: 30,
              paddingHorizontal: 20,
              backgroundColor: theme.colors.white,
            }}
          >
            <View
              style={{
                flex: 1,
                borderColor: theme.colors.border,
                borderRadius: 5,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginBottom: 25,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.border,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingBottom: 5,
                  }}
                >
                  First Name
                </Text>
                <TextInput
                  style={{
                    color: theme.colors.mainBlue,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.body.sz_i,
                  }}
                  placeholder="Fill The First Name"
                >
                  Bambang
                </TextInput>
              </View>
              <Image
                source={require('../../assets/images/tick.png')}
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderColor: theme.colors.border,
                borderRadius: 5,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginBottom: 25,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.border,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingBottom: 5,
                  }}
                >
                  Last Name
                </Text>
                <TextInput
                  style={{
                    color: theme.colors.mainBlue,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.body.sz_i,
                  }}
                  placeholder="Fill The Last Name"
                >
                  Pamu
                </TextInput>
              </View>
              <Image
                source={require('../../assets/images/tick.png')}
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderColor: theme.colors.border,
                borderRadius: 5,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginBottom: 25,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.border,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingBottom: 5,
                  }}
                >
                  Private Email
                </Text>
                <TextInput
                  style={{
                    color: theme.colors.mainBlue,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.body.sz_i,
                  }}
                  placeholder="Fill The Private Email"
                >
                  Bambang@gmail.com
                </TextInput>
              </View>
              <Image
                source={require('../../assets/images/tick.png')}
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderColor: theme.colors.border,
                borderRadius: 5,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginBottom: 25,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.border,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingBottom: 5,
                  }}
                >
                  Contact Number
                </Text>
                <TextInput
                  style={{
                    color: theme.colors.mainBlue,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.body.sz_i,
                  }}
                  placeholder="Fill The Contact Number"
                >
                  081123456789
                </TextInput>
              </View>
              <Image
                source={require('../../assets/images/tick.png')}
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                borderColor: theme.colors.border,
                borderRadius: 5,
                borderWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                marginBottom: 25,
                flexDirection: 'row',
                alignSelf: 'flex-start',
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  flexDirection: 'column',
                  alignSelf: 'flex-start',
                }}
              >
                <Text
                  style={{
                    color: theme.colors.border,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingBottom: 5,
                  }}
                >
                  House Address
                </Text>
                <TextInput
                  style={{
                    color: theme.colors.mainBlue,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.body.sz_i,
                  }}
                  placeholder="Fill The House Address"
                >
                  Jalan Alam Sutera
                </TextInput>
              </View>
              <Image
                source={require('../../assets/images/tick.png')}
                style={{
                  width: 15,
                  height: 10,
                  alignSelf: 'center',
                  marginRight: 20,
                }}
              />
            </View>
            <View>
              <Pressable
                onPress={() => navigation.navigate(routes.profilePageRoute)}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 9,
                  paddingHorizontal: 20,
                  marginRight: 280,
                  elevation: 3,
                  borderRadius: 5,
                  backgroundColor: theme.colors.mainBlue,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Save
                </Text>
              </Pressable>
            </View>
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

export default EditProfileScreen
