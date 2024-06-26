import { View, Text, Button, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const EventDetail = ({event, onBack}) => {

  const [image, setImage] = useState([]);

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
     if(!result.canceled) {
      setImage([...image, result.assets[0].uri]);
     }
  }

  const pickPicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

     if(!result.canceled) {
      setImage([...image, result.assets[0].uri]);
     }
  }

  return (
    <ScrollView style={{marginTop: 100}}>
      <Text style={{fontSize: 24, marginBottom: 10, alignSelf: 'center'}}>{event.nombre}</Text>
      <Text style={{fontSize: 18, marginBottom: 20, alignSelf: 'center', textAlign: 'center'}}>{event.descripcion}</Text>
      <View>
        <Button title='Selecciona una imagen de tu galeria' onPress={selectImage}></Button>
        <Button title='Tomar una fotografia' onPress={pickPicture}></Button>
        <Button title='Volver' onPress={onBack}></Button>
      </View>
      <FlatList 
      data={image}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center'
  }
})

export default EventDetail