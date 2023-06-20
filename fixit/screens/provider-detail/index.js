import { React, useState } from 'react'
import {
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { useTheme } from 'styled-components/native'

import ProviderDetailInfo from './info'
import ProviderDetail from './more-detail/detail'
import ReviewDetail from './more-detail/review'
import Footer from './footer'
import { TouchableOpacity } from 'react-native-gesture-handler'

import routes from '../../routes'

const ProviderDetailScreen = ({ navigation }) => {
  const theme = useTheme()

  const [button1Pressed, setButton1Pressed] = useState(true)
  const [button2Pressed, setButton2Pressed] = useState(false)

  const handleButton1Press = () => {
    setButton1Pressed(true)
    setButton2Pressed(false)
  }

  const handleButton2Press = () => {
    setButton1Pressed(false)
    setButton2Pressed(true)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View
          style={{
            backgroundColor: theme.colors.mainBlue,
            flexDirection: 'row',
            alignContent: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.searchResultPageRoute)}
          >
            <Image
              source={require('../../assets/images/back-button.png')}
              style={{ width: 30, height: 30, margin: 16 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: theme.colors.white,
              fontFamily: theme.typography.family.bold,
              fontSize: theme.typography.heading.sz_i,
              paddingVertical: 16,
            }}
          >
            Service Provider Info
          </Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/provider1.png')}
            style={{
              width: 415,
              position: 'static',
              alignContent: 'center',
              alignItems: 'center',
            }}
          />
          <View style={styles.body}>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 0.5,
                paddingBottom: 16,
              }}
            >
              <View style={styles.margin}>
                <Text
                  style={{
                    fontFamily: theme.typography.family.bold,
                    fontSize: theme.typography.heading.sz_i,
                  }}
                >
                  Dodo
                </Text>
                <Text
                  style={{
                    fontFamily: theme.typography.family.regular,
                    fontSize: theme.typography.subheading.sz_i,
                    color: theme.colors.border,
                  }}
                >
                  Jalan Podomoro No.21 RT.01/RW.08, 17145 Setiabudi, Jakarta
                  Selatan
                </Text>
              </View>
              <View style={styles.margin}>
                <ProviderDetailInfo />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    marginTop: 16,
                  }}
                >
                  <TouchableOpacity onPress={handleButton1Press}>
                    <View>
                      <Text
                        style={{
                          fontFamily: button1Pressed
                            ? theme.typography.family.bold
                            : theme.typography.family.regular,
                        }}
                      >
                        Details
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleButton2Press}>
                    <View>
                      <Text
                        style={{
                          fontFamily: button2Pressed
                            ? theme.typography.family.bold
                            : theme.typography.family.regular,
                        }}
                      >
                        Review
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.margin}>
              {button1Pressed ? <ProviderDetail /> : null}
              {button2Pressed ? <ReviewDetail /> : null}
            </View>
          </View>
        </View>
        <Footer navigation={navigation} />
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
    // marginHorizontal: 20,
  },
  margin: {
    paddingTop: 16,
    marginHorizontal: 20,
  },
})

export default ProviderDetailScreen
