import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

export default function AddClothingScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');

  async function choosePhoto() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function takePhoto() {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        'Camera Permission',
        'QuickFit needs camera access to photograph clothing.'
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function handleSave() {
    const clothingItem = {
      image,
      category,
      tags: tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    };

    console.log('Clothing item:', clothingItem);

    // TODO:
    // Eventually send clothingItem to:
    // POST /api/clothing

    Alert.alert(
      'Clothing Saved',
      'Your clothing item has been added!'
    );

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Clothing</Text>

      <View style={styles.photoButtons}>
        <Button
          title="Take Photo"
          onPress={takePhoto}
        />

        <Button
          title="Choose Photo"
          onPress={choosePhoto}
        />
      </View>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      )}

      <Text style={styles.label}>
        Category
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Shirt, Pants, Shoes"
        value={category}
        onChangeText={setCategory}
      />

      <Text style={styles.label}>
        Tags
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. black, casual, summer"
        value={tags}
        onChangeText={setTags}
      />

      <Text style={styles.helpText}>
        Separate tags with commas.
      </Text>

      <Button
        title="Save Clothing"
        onPress={handleSave}
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

  photoButtons: {
    gap: 10,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 5,
  },

  helpText: {
    color: '#666',
    marginBottom: 20,
  },
});