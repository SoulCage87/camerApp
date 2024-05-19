import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { events } from '../components/events'

const Events = () => {

  const [selectEvent, setSelectEvent] = useState(null)



  return (
    <View style={{alignSelf: 'center', marginTop: 250}}>
       <FlatList  
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectEvent(item)}>
            <Text style={styles.nameEvento}>{item.nombre}</Text>
            <Text style={styles.nameEvento}>{item.descripcion}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  nameEvento: {
    fontSize: 20,
    marginVertical: 12,
    textAlign: 'center'
  }
})

export default Events