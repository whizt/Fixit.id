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

export function ChatScreen({ navigation }) {
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
              paddingHorizontal: 174.7,
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
              Chat
            </Text>
          </View>
          <TouchableOpacity
              onPress={() => navigation.navigate(routes.chatDetailPageRoute)}
            >
          <View
            style={{
              flex: 1,
              borderColor: theme.colors.border,
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingHorizontal: 20,
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
                Saya tunggu ya
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Image
              source={require('../../assets/images/notif1.png')}
              style={{ width: 25, height: 25 , marginRight: 12.5,}}
              />
              <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingTop:5,
                    paddingRight:10,
                  }}
                >
                  15:20
              </Text>
            </View>
          </View>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              borderColor: theme.colors.border,
              flexDirection: 'row',
              alignItems: 'flex-start',
              paddingHorizontal: 20,
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
                ok mas
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
                    paddingTop:30,
                    paddingRight:10,
                  }}
                >
                  14:30
              </Text>
            </View>
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
                kalau 20.000 bisa?
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
                    paddingTop:30,
                    paddingRight:10,
                  }}
                >
                  14:20
              </Text>
            </View>
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
                P
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Image
              source={require('../../assets/images/notif2.png')}
              style={{ width: 25, height: 25 , marginRight: 12.5,}}
              />
              <Text
                  style={{
                    color: theme.colors.black,
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    paddingTop:5,
                    paddingRight:10,
                  }}
                >
                  13:00
              </Text>
            </View>
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
                maaf pak, terlalu mahal
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
                    paddingTop:30,
                    paddingRight:10,
                  }}
                >
                  14:20
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default ChatScreen;
