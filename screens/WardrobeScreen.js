import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const clothing = [
  {
    id: '1',
    name: 'Black T-Shirt',
    category: 'Shirt',
    tags: ['black', 'casual'],
  },
  {
    id: '2',
    name: 'Blue Jeans',
    category: 'Pants',
    tags: ['blue', 'casual'],
  },
];

export default function WardrobeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Wardrobe</Text>

      <Button
        title="+ Add Clothing"
        onPress={() => navigation.navigate('AddClothing')}
      />

      <FlatList
        data={clothing}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>
              {item.name}
            </Text>

            <Text>
              Category: {item.category}
            </Text>

            <Text>
              Tags: {item.tags.join(', ')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },

  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});