import React from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';

function AppPro() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});
export default AppPro;
