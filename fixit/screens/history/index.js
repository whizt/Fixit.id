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

export function HistoryScreen({ navigation }) {
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
              paddingHorizontal: 164,
              paddingVertical: 20,
              alignSelf: 'center',
            }}
          >
            <Text
              style={{
                color: theme.colors.white,
                textAlign: 'center',
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.heading.sz_i,
              }}
            >
              History
            </Text>
          </View>
          <View
            style={{
              borderColor: theme.colors.white,
              backgroundColor: theme.colors.white,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: theme.colors.mainBlue,
                textAlign: 'center',
                borderBottomWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.body.sz_i,
              }}
            >
              Ongoing
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.completedHistoryPageRoute)
              }
            >
              <Text
                style={{
                  color: theme.colors.border,
                  textAlign: 'center',
                  borderBottomWidth: 0,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.body.sz_i,
                }}
              >
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              borderColor: theme.colors.border,
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginHorizontal: 20,
              paddingVertical: 10,
              marginTop: 10,
              borderBottomWidth: 1,
            }}
          >
            <Image
              source={require('../../assets/images/history1.png')}
              style={{ width: 50, height: 50 }}
            />
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingLeft: 7,
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.heading.sz_i,
                  marginBottom: 2,
                }}
              >
                Dodo
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Service
              </Text>
              <Text
                style={{
                  color: theme.colors.border,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Maintenance Washing Machine
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Status
              </Text>
              <Text
                style={{
                  color: theme.colors.border,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                On Progress
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  paddingBottom: 50,
                }}
              >
                Rp369.000
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 9,
                  paddingHorizontal: 20,
                  elevation: 3,
                  borderRadius: 5,
                  backgroundColor: theme.colors.mainBlue,
                }}
                onPress={() => navigation.navigate('Chat')}
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Chat
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderColor: theme.colors.border,
              flexDirection: 'row',
              alignItems: 'flex-start',
              marginHorizontal: 20,
              paddingVertical: 10,
              marginTop: 10,
              borderBottomWidth: 1,
            }}
            >
            <Image
              source={require('../../assets/images/history2.png')}
              style={{ width: 50, height: 50 }}
            />
            <View
              style={{
                flex: 2,
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingLeft: 7,
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.heading.sz_i,
                  marginBottom: 2,
                }}
              >
                Lares
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Service
              </Text>
              <Text
                style={{
                  color: theme.colors.border,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Car Service
              </Text>
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                  marginBottom: 2,
                }}
              >
                Status
              </Text>
              <Text
                style={{
                  color: theme.colors.border,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                }}
              >
                Requested
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Text
                style={{
                  color: theme.colors.black,
                  fontFamily: theme.typography.family.regular,
                  fontSize: theme.typography.subheading.sz_i,
                  paddingBottom: 50,
                }}
              >
                Rp1.500.000
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 9,
                  paddingHorizontal: 20,
                  elevation: 3,
                  borderRadius: 5,
                  backgroundColor: theme.colors.mainBlue,
                }}
                onPress={() => navigation.navigate('Chat')}
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Chat
                </Text>
              </TouchableOpacity>
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

export default HistoryScreen
