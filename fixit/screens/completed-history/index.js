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

export function CompletedHistoryScreen({ navigation }) {
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
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.historyPageRoute)}
            >
              <Text
                style={{
                  color: theme.colors.mainBlue,
                  textAlign: 'center',
                  borderBottomWidth: 0,
                  paddingVertical: 5,
                  paddingHorizontal: 5,
                  fontFamily: theme.typography.family.bold,
                  fontSize: theme.typography.body.sz_i,
                }}
              >
                Ongoing
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                color: theme.colors.border,
                textAlign: 'center',
                borderBottomWidth: 1,
                paddingVertical: 5,
                paddingHorizontal: 5,
                fontFamily: theme.typography.family.bold,
                fontSize: theme.typography.body.sz_i,
              }}
            >
              Completed
            </Text>
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
              source={require('../../assets/images/history3.png')}
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
                Bambang
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
                Fixing Computer
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
                28 May 15:40
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
                Rp239.000
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
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Detail
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
              source={require('../../assets/images/history4.png')}
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
                Rafi
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
                Cleaning the Air Conditioner
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
                28 May 10:46
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
                Rp300.000
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
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Detail
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
              source={require('../../assets/images/history5.png')}
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
                Wirno
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
                Fix the Sink
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
                27 May 16:20
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
                Rp560.000
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
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Detail
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
              source={require('../../assets/images/history6.png')}
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
                Yayas
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
                Motorcycle Service
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
                27 May 16:20
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
                Rp1.000.000
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
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Detail
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
              source={require('../../assets/images/history7.png')}
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
                Omen
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
                Fixing the Lights
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
                26 May 12:56
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
                Rp146.000
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
              >
                <Text
                  style={{
                    color: theme.colors.white,
                    fontFamily: theme.typography.family.medium,
                    fontSize: theme.typography.subheading.sz_i,
                  }}
                >
                  Detail
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

export default CompletedHistoryScreen
