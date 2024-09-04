import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(url) {
    Linking.openURL(url);
  }
  return (
    <View>
      <Text style={styles.heading}>ActionCard</Text>
      <View style={[styles.container, styles.card]}>
        <View style={styles.headingContainer}>
          <Text style={styles.linkText}>Visit our website</Text>
        </View>
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/anFFcdNJcVA0vyFPz_M1gS0r5C3UqoSZ_S2tDWM5p3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0pvYnND/YXJlZXJzLTkwMTU2/ODY2MC5qcGc',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.footerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            incidunt itaque dolores vel cumque molestias vitae dolorum deserunt
            laboriosam quidem velit officia dignissimos repudiandae aut, magni
            perferendis? Molestias, ducimus fugiat.
          </Text>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com/')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com/')}>
            <Text style={styles.socialLinks}>Folloe Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    // paddingHorizontal: 10,
  },
  cardImage: {
    height: 200,
  },
  card: {
    borderRadius: 5,
    height: 350,
    width: 350,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#E07C24',
  },
  headingContainer: {
    height: 20,
  },
  linkText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 5,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  footerText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
