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

const HomeScreen = ({navigation}) => {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View style={styles.container}>
            <View style={{
              backgroundColor: theme.colors.mainBlue, height:190,
            }}>
              <View style={{ flexDirection:"row", marginBottom:15 }}>
                <View style={[{ 
                  width: "80%",
                  height: 36,
                  margin: 16, 
                  marginRight: 0, 
                  backgroundColor: "white", 
                  borderRadius: 10 }]}>
                  <TouchableOpacity onPress={() => navigation.navigate(routes.searchPageRoute)}>
                    <View style={{ flexDirection:"row"}}>
                      <Image
                        source={require('../../assets/images/search.png')}
                        style={{ width: 16, height: 16, margin: 10, marginLeft:12}}
                      />
                      <Text style={{ 
                        fontFamily: theme.typography.family.regular, 
                        fontSize: 12,
                        color: theme.colors.grey2, 
                        marginLeft:10, 
                        marginTop:7}}
                        >Search
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View> 
                <View>
                  <Image
                    source={require('../../assets/images/notification-symbol.png')}
                    style={{ width: 30, height: 30, margin: 16}}
                  />
                </View>
              </View>
              <ScrollView horizontal= {true}>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-ac.png')}
                    style={{ width: 70, height: 70, marginLeft:16, marginRight:10 }}
                  />
                </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-keran.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-mesincuci.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-listrik.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-pc.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-wifi.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-mobil.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.searchResultPageRoute)}>
                <View>
                  <Image
                    source={require('../../assets/images/category-motor.png')}
                    style={{ width: 70, height: 70, marginRight:10 }}
                  />
                </View>
                  
                </TouchableOpacity>
              </ScrollView>
            </View>

        <View style={[styles.body]}>
            <Text style={{
              color: '#000000', 
              fontFamily: theme.typography.family.bold, 
              fontSize: 24,
              marginTop:26,
            }}>Offers for you</Text>
            <ScrollView horizontal= {true} styles={styles.bgBiru}>
              <View>
                <Image
                  source={require('../../assets/images/tawaran1.png')}
                  style={styles.bannerImg}
                />
              </View>
              <View>
                <Image
                  source={require('../../assets/images/tawaran2.png')}
                  style={styles.bannerImg}
                />
              </View>
              <View>
                <Image
                  source={require('../../assets/images/tawaran3.png')}
                  style={styles.bannerImg}
                />
              </View>
              <View>
                <Image
                  source={require('../../assets/images/tawaran4.png')}
                  style={styles.bannerImg}
                />
              </View>
            </ScrollView>

            <Text style={{
              color: '#000000', 
              fontFamily: theme.typography.family.bold, 
              fontSize: 24,
              marginBottom: 16
            }}>Near You</Text>
            <TouchableOpacity onPress={() => navigation.navigate(routes.providerDetailPageRoute)}>
              <View style={[{ 
                width: "100%",
                height: 73,
                backgroundColor: theme.colors.mainBlue, 
                borderRadius: 10, marginBottom: 10 }]}>
                <View style={{ flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/images/profile-1.png')}
                    style={{ width: 50, height: 50, margin:11 }}
                  />
                  <View>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.bold, 
                      fontSize: 14,
                      marginTop: 11,
                      width: 240,
                      }}>
                      Bambang Service Center
                    </Text>
                    <View style={{ flexDirection:"row"}}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text style={{
                        color: 'white', 
                        fontFamily: theme.typography.family.medium, 
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 5
                        }}>
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop:11 }}
                  />
                  <View style={{marginRight: '3%'}}>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.regular, 
                      fontSize: 12,
                      marginTop: 10,
                      marginLeft: 7,
                      }}>
                      4.9
                    </Text>
                    <Image
                      source={require('../../assets/images/category-pc-profile.png')}
                      style={{ width: 17, height: 17, marginTop: 8, marginLeft: 7 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(routes.providerDetailPageRoute)}>
              <View style={[{ 
                width: "100%",
                height: 73,
                backgroundColor: theme.colors.mainBlue, 
                borderRadius: 10, marginBottom: 10 }]}>
                <View style={{ flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/images/profile-2.png')}
                    style={{ width: 50, height: 50, margin:11 }}
                  />
                  <View>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.bold, 
                      fontSize: 14,
                      marginTop: 11,
                      width: 240,
                      }}>
                      Rafi Service Center
                    </Text>
                    <View style={{ flexDirection:"row"}}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text style={{
                        color: 'white', 
                        fontFamily: theme.typography.family.medium, 
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 5
                        }}>
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop:11 }}
                  />
                  <View style={{marginRight: '3%'}}>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.regular, 
                      fontSize: 12,
                      marginTop: 10,
                      marginLeft: 7,
                      }}>
                      4.7
                    </Text>
                    <Image
                      source={require('../../assets/images/category-ac-profile.png')}
                      style={{ width: 17, height: 17, marginTop: 8, marginLeft: 7 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(routes.providerDetailPageRoute)}>
              <View style={[{ 
                width: "100%",
                height: 73,
                backgroundColor: theme.colors.mainBlue, 
                borderRadius: 10, marginBottom: 10 }]}>
                <View style={{ flexDirection:"row"}}>
                  <Image
                    source={require('../../assets/images/profile-3.png')}
                    style={{ width: 50, height: 50, margin:11 }}
                  />
                  <View>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.bold, 
                      fontSize: 14,
                      marginTop: 11,
                      width: 240,
                      }}>
                      Wirno
                    </Text>
                    <View style={{ flexDirection:"row"}}>
                      <Image
                        source={require('../../assets/images/location.png')}
                        style={{ width: 20, height: 20, marginTop: 5 }}
                      />
                      <Text style={{
                        color: 'white', 
                        fontFamily: theme.typography.family.medium, 
                        fontSize: 12,
                        marginTop: 5,
                        marginLeft: 5
                        }}>
                        Tangerang
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../../assets/images/star-rating.png')}
                    style={{ width: 16, height: 16, marginTop:11 }}
                  />
                  <View style={{marginRight: '3%'}}>
                    <Text style={{
                      color: 'white', 
                      fontFamily: theme.typography.family.regular, 
                      fontSize: 12,
                      marginTop: 10,
                      marginLeft: 7,
                      }}>
                      4.5
                    </Text>
                    <Image
                      source={require('../../assets/images/category-keran-profile.png')}
                      style={{ width: 17, height: 17, marginTop: 8, marginLeft: 7 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <Text style={{color: theme.colors.mainBlue, textAlign:'right', textDecorationLine: 'underline'}}
                  onPress={() => navigation.navigate(routes.searchPageRoute)}>
                See More
              </Text>
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
  bannerImg: {
    width: 300, 
    height: 137, 
    marginRight:12, 
    marginTop:16,
    marginBottom: 26,
  }
})

export default HomeScreen
