import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>FancyCard</Text>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://imgs.search.brave.com/eCAxYb96adTVGqPvJV58B5u6RK1yPRneoCcZ86E5E3g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAy/NTMwNDgwL3Bob3Rv/L3Rhai1tYWhhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Umk0U25iVlhZcWk1/QmxHa0pxNTg5TTlH/eExaZk9wRHRZbnFk/bUVGaFhGTT0',
            }}
            style={styles.cardImage}
          />
          <View style={styles.card}>
            <Text style={styles.cardImageTitle}>Image Heading</Text>
            <Text style={styles.cardImageLabel}>Image Label</Text>
            <Text style={styles.cardImageDescription}>
              Image Description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ullam dolor eum possimus harum, dignissimos amet
              eius facilis ab, est quod accusantium pariatur culpa. Numquam,
              saepe dolor quos sequi quidem placeat?
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    gap: 5,
    elevation: 4,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  cardImage: {
    height: 180,
    borderRadius: 10,
  },
  cardImageTitle: {
    fontWeight: 'bold',
    lineHeight: 20,
    color: '#000000',
  },
  cardImageLabel: {
    lineHeight: 18,
    color: '#000000',
  },
  cardImageDescription: {
    lineHeight: 18,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#000000',
    flexShrink: 1,
  },
});
