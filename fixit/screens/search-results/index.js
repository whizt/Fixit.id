import { React, useState } from 'react'
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

const SearchResultScreen = ({ navigation }) => {
  const theme = useTheme()
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
                  onPress={() => navigation.navigate(routes.searchPageRoute)}
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
                    width: '70%',
                    height: 36,
                    marginLeft: 0,
                    marginTop: 13,
                    backgroundColor: 'white',
                    borderRadius: 10,
                  },
                ]}
              >
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(routes.searchPageRoute)}
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
                        style={{
                          fontFamily: theme.typography.family.regular,
                          fontSize: 12,
                          color: theme.colors.border,
                          marginLeft: 10,
                          width: 240,
                          marginBottom: 3,
                        }}
                        placeholder="Search"
                      >
                        Dodo
                      </TextInput>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/filter-icon.png')}
                    style={{ width: 30, height: 30, margin: 16 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <Text
              style={{
                color: '#000000',
                fontFamily: theme.typography.family.bold,
                fontSize: 16,
                marginBottom: 16,
                marginTop: 16,
              }}
            >
              Category
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/ac-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/keran-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/mesincuci-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/listrik-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/pc-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/wifi-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/mobil-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/motor-result.png')}
                  style={{ width: 70, height: 70, margin: 16, marginRight: 0 }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#000000',
                fontFamily: theme.typography.family.bold,
                fontSize: 16,
                marginBottom: 16,
                marginTop: 16,
              }}
            >
              Search Result “Dodo”
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
                      Dodoe Service
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
                      source={require('../../assets/images/category-listrik-profile.png')}
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
                      Dodo City
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
                      source={require('../../assets/images/category-listrik-profile.png')}
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
                      Dodo Tangerang Center
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
                      source={require('../../assets/images/category-listrik-profile.png')}
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
                      Dodori
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
                      source={require('../../assets/images/category-listrik-profile.png')}
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

export default SearchResultScreen
