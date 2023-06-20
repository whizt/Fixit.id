import { React, useRef } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from 'styled-components/native'
import routes from '../../routes'
import { TextInput } from 'react-native-gesture-handler'

const SearchScreen = ({ navigation }) => {
  const theme = useTheme()
  const inputRef = useRef()

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: theme.colors.mainBlue,
              height: 60,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate(routes.homePageRoute)}
                >
                  <Image
                    source={require('../../assets/images/back.png')}
                    style={{ width: 30, height: 30, margin: 16 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={[
                  {
                    width: '80%',
                    height: 36,
                    marginRight: 16,
                    marginLeft: 0,
                    marginTop: 13,
                    backgroundColor: 'white',
                    borderRadius: 10,
                  },
                ]}
              >
                <View
                  style={{ flexDirection: 'row', width: 300, display: 'flex' }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(routes.searchResultPageRoute)
                    }
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/search.png')}
                        style={{
                          width: 16,
                          height: 16,
                          margin: 10,
                          marginLeft: 12,
                        }}
                      />
                      <TextInput
                        ref={inputRef}
                        onLayout={() => inputRef.current.focus()}
                        style={{
                          fontFamily: theme.typography.family.regular,
                          fontSize: 12,
                          color: theme.colors.border,
                          marginLeft: 10,
                          width: 230,
                          marginBottom: 3,
                        }}
                        placeholder="Search"
                      ></TextInput>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(routes.homePageRoute)}
                  >
                    <Image
                      source={require('../../assets/images/x-search.png')}
                      style={{ width: 16, height: 16, margin: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Air Conditioner
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Tap
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Electric
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Washing Machine
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Car
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Motorbike
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Computer
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.searchResultPageRoute)
                }
              >
                <View
                  style={[
                    {
                      width: '95%',
                      height: 27,
                      marginRight: 20,
                      marginLeft: 0,
                      marginTop: 13,
                      backgroundColor: '#D9D9D9',
                      borderRadius: 2,
                    },
                  ]}
                >
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 2,
                      fontFamily: theme.typography.family.bold,
                      fontSize: theme.typography.small,
                      color: theme.colors.border,
                    }}
                  >
                    Wi-Fi
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.body}>
            <Text
              style={{
                color: '#000000',
                fontFamily: theme.typography.family.bold,
                fontSize: 14,
                marginBottom: 16,
                marginTop: 16,
              }}
            >
              Recommended near you
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.providerDetailPageRoute)
              }
            >
              <View
                style={[
                  {
                    width: '100%',
                    height: 73,
                    backgroundColor: theme.colors.mainBlue,
                    borderRadius: 10,
                    marginBottom: 10,
                  },
                ]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/profile-1.png')}
                    style={{ width: 50, height: 50, margin: 11 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.bold,
                        fontSize: 14,
                        marginTop: 11,
                        width: 240,
                      }}
                    >
                      Bambang Service Center
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: theme.typography.family.medium,
                          fontSize: 12,
                          marginTop: 5,
                          marginLeft: 5,
                        }}
                      >
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop: 11 }}
                  />
                  <View style={{ marginRight: '3%' }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.regular,
                        fontSize: 12,
                        marginTop: 10,
                        marginLeft: 7,
                      }}
                    >
                      4.9
                    </Text>
                    <Image
                      source={require('../../assets/images/category-pc-profile.png')}
                      style={{
                        width: 17,
                        height: 17,
                        marginTop: 8,
                        marginLeft: 7,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.providerDetailPageRoute)
              }
            >
              <View
                style={[
                  {
                    width: '100%',
                    height: 73,
                    backgroundColor: theme.colors.mainBlue,
                    borderRadius: 10,
                    marginBottom: 10,
                  },
                ]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/profile-2.png')}
                    style={{ width: 50, height: 50, margin: 11 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.bold,
                        fontSize: 14,
                        marginTop: 11,
                        width: 240,
                      }}
                    >
                      Rafi Service Center
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: theme.typography.family.medium,
                          fontSize: 12,
                          marginTop: 5,
                          marginLeft: 5,
                        }}
                      >
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop: 11 }}
                  />
                  <View style={{ marginRight: '3%' }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.regular,
                        fontSize: 12,
                        marginTop: 10,
                        marginLeft: 7,
                      }}
                    >
                      4.7
                    </Text>
                    <Image
                      source={require('../../assets/images/category-ac-profile.png')}
                      style={{
                        width: 17,
                        height: 17,
                        marginTop: 8,
                        marginLeft: 7,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.providerDetailPageRoute)
              }
            >
              <View
                style={[
                  {
                    width: '100%',
                    height: 73,
                    backgroundColor: theme.colors.mainBlue,
                    borderRadius: 10,
                    marginBottom: 10,
                  },
                ]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/profile-3.png')}
                    style={{ width: 50, height: 50, margin: 11 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.bold,
                        fontSize: 14,
                        marginTop: 11,
                        width: 240,
                      }}
                    >
                      Wirno
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: theme.typography.family.medium,
                          fontSize: 12,
                          marginTop: 5,
                          marginLeft: 5,
                        }}
                      >
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop: 11 }}
                  />
                  <View style={{ marginRight: '3%' }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.regular,
                        fontSize: 12,
                        marginTop: 10,
                        marginLeft: 7,
                      }}
                    >
                      4.5
                    </Text>
                    <Image
                      source={require('../../assets/images/category-keran-profile.png')}
                      style={{
                        width: 17,
                        height: 17,
                        marginTop: 8,
                        marginLeft: 7,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.providerDetailPageRoute)
              }
            >
              <View
                style={[
                  {
                    width: '100%',
                    height: 73,
                    backgroundColor: theme.colors.mainBlue,
                    borderRadius: 10,
                    marginBottom: 10,
                  },
                ]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={require('../../assets/images/profile-4.png')}
                    style={{ width: 50, height: 50, margin: 11 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.bold,
                        fontSize: 14,
                        marginTop: 11,
                        width: 240,
                      }}
                    >
                      Yayas
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text
                        style={{
                          color: 'white',
                          fontFamily: theme.typography.family.medium,
                          fontSize: 12,
                          marginTop: 5,
                          marginLeft: 5,
                        }}
                      >
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop: 11 }}
                  />
                  <View style={{ marginRight: '3%' }}>
                    <Text
                      style={{
                        color: 'white',
                        fontFamily: theme.typography.family.regular,
                        fontSize: 12,
                        marginTop: 10,
                        marginLeft: 7,
                      }}
                    >
                      4.6
                    </Text>
                    <Image
                      source={require('../../assets/images/category-motor-profile.png')}
                      style={{
                        width: 17,
                        height: 17,
                        marginTop: 8,
                        marginLeft: 7,
                      }}
                    />
                  </View>
                </View>
              </View>
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

export default SearchScreen
