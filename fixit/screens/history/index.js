import {React, useState} from 'react';
import { Image, ScrollView, StatusBar, View, StyleSheet,Text } from 'react-native';
import { useTheme } from 'styled-components/native'

// import BannerSection from './BannerSection';
// import NewReleaseSection from './NewReleaseSection';
// import SectionNavigation from './SectionNavigation';
// import CategorySection from './CategorySection';
// import RecommendationSection from './RecommendationSection';

const HistoryScreen = () => {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text>History Screen</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
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

export default HistoryScreen;
