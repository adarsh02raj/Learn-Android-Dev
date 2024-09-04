import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const Contacts = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      imageUrl:
        'https://imgs.search.brave.com/45ReukZZmKqWuPkXRnxP5bVyppI3aDdjgZoK-_Yr6Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NDY0MjYzMi9waG90/by9jbG9zZS11cC1w/b3J0cmFpdC1vZi1i/cnVuZXR0ZS13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZDhXX0MyRC0y/clhsbmt5bDhFaXJw/SEdmLUdwTTYyZ0Jq/cERvTnJ5eTk4VT0',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '987-654-3210',
      imageUrl:
        'https://imgs.search.brave.com/45ReukZZmKqWuPkXRnxP5bVyppI3aDdjgZoK-_Yr6Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NDY0MjYzMi9waG90/by9jbG9zZS11cC1w/b3J0cmFpdC1vZi1i/cnVuZXR0ZS13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZDhXX0MyRC0y/clhsbmt5bDhFaXJw/SEdmLUdwTTYyZ0Jq/cERvTnJ5eTk4VT0',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      phone: '555-555-5555',
      imageUrl:
        'https://imgs.search.brave.com/45ReukZZmKqWuPkXRnxP5bVyppI3aDdjgZoK-_Yr6Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NDY0MjYzMi9waG90/by9jbG9zZS11cC1w/b3J0cmFpdC1vZi1i/cnVuZXR0ZS13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZDhXX0MyRC0y/clhsbmt5bDhFaXJw/SEdmLUdwTTYyZ0Jq/cERvTnJ5eTk4VT0',
    },
    {
      id: 4,
      name: 'Bob Brown',
      phone: '444-444-4444',
      imageUrl:
        'https://imgs.search.brave.com/45ReukZZmKqWuPkXRnxP5bVyppI3aDdjgZoK-_Yr6Ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NDY0MjYzMi9waG90/by9jbG9zZS11cC1w/b3J0cmFpdC1vZi1i/cnVuZXR0ZS13b21h/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZDhXX0MyRC0y/clhsbmt5bDhFaXJw/SEdmLUdwTTYyZ0Jq/cERvTnJ5eTk4VT0',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {Contacts.map(({id, name, phone, imageUrl}) => (
          <View key={id} style={styles.userCard}>
            <Image style={styles.userImage} source={{uri: imageUrl}} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userPhone}>{phone}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

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
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    backgroundColor: '#8D3DAF',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginLeft: 14,
  },
  userName: {},
  userPhone: {},
});
