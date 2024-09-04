import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.heading}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card_one]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card_two]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card_three]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card_three]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
  },
  card: {
    height: 100,
    width: 100,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  card_one: {
    backgroundColor: 'red',
  },
  card_two: {
    backgroundColor: 'green',
  },
  card_three: {
    backgroundColor: 'blue',
  },
});
export default FlatCard;
