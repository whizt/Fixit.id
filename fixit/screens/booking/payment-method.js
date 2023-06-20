import { React, useState } from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled, { useTheme } from 'styled-components/native'

const category = {
  CASH: 'cash',
  BCA: 'bca',
  MANDIRI: 'mandiri',
  GOPAY: 'gopay',
  OVO: 'ovo',
}
const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 8px;
`

const PaymentMethod = ({ navigation }) => {
  const theme = useTheme()
  const [selectedCategories, setSelectedCategories] = useState([])
  function categorySelected(category) {
    return selectedCategories.includes(category)
  }
  function toggleCategoryFilter(category) {
    if (!categorySelected(category)) {
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        category,
      ])
      return
    }
    setSelectedCategories((selectedCategories) =>
      selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      )
    )
  }

  return (
    <>
      <View style={styles.main}>
        <View style={{ paddingBottom: 16 }}>
          <Text style={{ fontFamily: theme.typography.family.bold }}>
            Payment Method
          </Text>
        </View>
        <CategoryContainer>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{
                width: 15,
                height: 8,
                paddingVertical: 6,
                marginVertical: 5,
              }}
            />
            <Text style={{ paddingLeft: 8 }}>Cash</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleCategoryFilter(category.CASH)}
            isSelected={categorySelected(category.CASH)}
            style={{
              marginLeft: 20,
              width: 18,
              height: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.colors.mainBlue,
              backgroundColor: categorySelected(category.CASH)
                ? theme.colors.mainBlue
                : theme.colors.white,
            }}
            backgroundColor={
              categorySelected(category.CASH)
                ? theme.colors.mainBlue
                : theme.colors.black
            }
            height="20"
            width="20"
            borderRadius="20"
            borderWidth="1"
            borderColor={theme.colors.mainBlue}
          />
        </CategoryContainer>
        <CategoryContainer>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{
                width: 15,
                height: 8,
                paddingVertical: 6,
                marginVertical: 5,
              }}
            />
            <Text style={{ paddingLeft: 8 }}>BCA Virtual Account</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleCategoryFilter(category.BCA)}
            isSelected={categorySelected(category.BCA)}
            style={{
              marginLeft: 20,
              width: 18,
              height: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.colors.mainBlue,
              backgroundColor: categorySelected(category.BCA)
                ? theme.colors.mainBlue
                : theme.colors.white,
            }}
            backgroundColor={
              categorySelected(category.BCA)
                ? theme.colors.mainBlue
                : theme.colors.black
            }
            height="20"
            width="20"
            borderRadius="20"
            borderWidth="1"
            borderColor={theme.colors.mainBlue}
          />
        </CategoryContainer>
        <CategoryContainer>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{
                width: 15,
                height: 8,
                paddingVertical: 6,
                marginVertical: 5,
              }}
            />
            <Text style={{ paddingLeft: 8 }}>Mandiri Virtual Account</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleCategoryFilter(category.MANDIRI)}
            isSelected={categorySelected(category.MANDIRI)}
            style={{
              marginLeft: 20,
              width: 18,
              height: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.colors.mainBlue,
              backgroundColor: categorySelected(category.MANDIRI)
                ? theme.colors.mainBlue
                : theme.colors.white,
            }}
            backgroundColor={
              categorySelected(category.MANDIRI)
                ? theme.colors.mainBlue
                : theme.colors.black
            }
            height="20"
            width="20"
            borderRadius="20"
            borderWidth="1"
            borderColor={theme.colors.mainBlue}
          />
        </CategoryContainer>
        <CategoryContainer>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{
                width: 15,
                height: 8,
                paddingVertical: 6,
                marginVertical: 5,
              }}
            />
            <Text style={{ paddingLeft: 8 }}>Gopay</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleCategoryFilter(category.GOPAY)}
            isSelected={categorySelected(category.GOPAY)}
            style={{
              marginLeft: 20,
              width: 18,
              height: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.colors.mainBlue,
              backgroundColor: categorySelected(category.GOPAY)
                ? theme.colors.mainBlue
                : theme.colors.white,
            }}
            backgroundColor={
              categorySelected(category.GOPAY)
                ? theme.colors.mainBlue
                : theme.colors.black
            }
            height="20"
            width="20"
            borderRadius="20"
            borderWidth="1"
            borderColor={theme.colors.mainBlue}
          />
        </CategoryContainer>
        <CategoryContainer>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/cash-icon.png')}
              style={{
                width: 15,
                height: 8,
                paddingVertical: 6,
                marginVertical: 5,
              }}
            />
            <Text style={{ paddingLeft: 8 }}>Ovo</Text>
          </View>
          <TouchableOpacity
            onPress={() => toggleCategoryFilter(category.OVO)}
            isSelected={categorySelected(category.OVO)}
            style={{
              marginLeft: 20,
              width: 18,
              height: 18,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.colors.mainBlue,
              backgroundColor: categorySelected(category.OVO)
                ? theme.colors.mainBlue
                : theme.colors.white,
            }}
            backgroundColor={
              categorySelected(category.OVO)
                ? theme.colors.mainBlue
                : theme.colors.black
            }
            height="20"
            width="20"
            borderRadius="20"
            borderWidth="1"
            borderColor={theme.colors.mainBlue}
          />
        </CategoryContainer>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 40,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default PaymentMethod
