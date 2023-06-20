import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTheme } from 'styled-components/native'

const ReviewComponent = ({ name, service, rating, date, review, likes, reviewerSource }) => {
  const theme = useTheme()

  return (
    <View style={styles.review}>
      <View style={styles.row}>
        <Image
          source={reviewerSource}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <View style={{ paddingLeft: 8 }}>
          <Text style={{ fontSize: theme.typography.subheading.sz_i }}>
            {name}
          </Text>
          <Text
            style={{
              color: theme.colors.grey2,
              fontSize: theme.typography.subheading.sz_i,
            }}
          >
            {service}
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <Image
          source={require('../assets/images/review-rate.png')}
          style={{
            width: 75,
            height: 12,
          }}
        />
        <Text style={{ paddingLeft: 8, fontSize: theme.typography.mini.sz_i }}>
          {date}
        </Text>
      </View>
      <View>
        <Text style={{ paddingTop: 8, fontSize: theme.typography.body.sz_i }}>
          {review}
        </Text>
      </View>
      <View style={styles.row}>
        <Image
          source={require('../assets/images/like-icon.png')}
          style={{
            width: 13,
            height: 13,
          }}
        />
        <Text style={{ paddingLeft: 8, fontSize: theme.typography.mini.sz_i }}>
          {likes} orang setuju
        </Text>
      </View>
    </View>
  )
}

export default ReviewComponent

const styles = {
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        paddingTop: 8,
        margin: 0,
      },
      review:{
        paddingBottom: 8,
        borderBottomWidth: 0.5,
        
      },
}
