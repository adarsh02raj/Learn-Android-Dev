import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>For</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Getting</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>view</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  container: {
    margin: 5,
  },
  card: {
    margin: 5,
    height: 100,
    width: 100,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {
    elevation: 4,
    backgroundColor: '#FACB66',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
