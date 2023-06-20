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
import { Button } from 'react-native-paper'
import { useTheme } from 'styled-components/native'
import ReviewComponent from '../../../components/review-component'

const ReviewDetail = () => {
  const theme = useTheme()
  
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            fontFamily: theme.typography.family.medium,
            fontSize: theme.typography.subheading.sz_i,
            color: theme.colors.black,
            padding: 8,
            borderColor: theme.colors.grey1,
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 8,
          }}
        >
          {/* satisfied */}
          <Text
            style={{
              fontFamily: theme.typography.family.bold,
              fontSize: theme.typography.heading.sz_i,
              color: theme.colors.black,
            }}
          >
            97% of users were satisfied
          </Text>
          <Text
            style={{
              fontFamily: theme.typography.family.medium,
              fontSize: theme.typography.subheading.sz_i,
              color: theme.colors.border,
            }}
          >
            25 reviews
          </Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          {/* sort button */}
          <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View
              style={{
                padding: 8,
                borderColor: theme.colors.grey1,
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                alignItems: 'center',
                margin: 0,
              }}
            >
              <Text
                style={{
                  fontFamily: theme.typography.family.medium,
                  fontSize: theme.typography.subheading.sz_i,
                  color: theme.colors.black,
                }}
              >
                Sort
              </Text>
              <View style={{ paddingLeft: 8 }}>
                <Image
                  source={require('../../../assets/images/sort-icon.png')}
                  style={{
                    width: 10,
                    height: 8,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <ReviewComponent
        name="Kelvin Sebastian"
        service="Washing Machine Maintenance"
        rating={3}
        date="3 days ago"
        review="Good Job, my washing machine is working again :D"
        likes={4}
        reviewerSource={require('../../../assets/images/review1.png')}
        />
        <ReviewComponent
        name="James Giggs"
        service="AC Maintenance"
        rating={3}
        date="3 weeks ago"
        review="the AC is still filthy"
        likes={1}
        reviewerSource={require('../../../assets/images/review2.png')}
        />
        <ReviewComponent
        name="Messi Junior"
        service="Electrical"
        rating={3}
        date="5 weeks ago"
        review="Arigatouuuuu :3"
        likes={2}
        reviewerSource={require('../../../assets/images/review3.png')}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingTop: 8,
    margin: 0,
  },
  container: {
    border: 5,
    borderColor: '#000000',
    padding: 5,
  },
  review:{
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    
  },
})

export default ReviewDetail
