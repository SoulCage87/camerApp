import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { events, Event } from '../components/events'
import EventDetail from './EventDetail'

const Events = () => {

  const [selectEvent, setSelectEvent] = useState<Event | null>(null);

  if (selectEvent) {
    return <EventDetail event={selectEvent} onBack={() => setSelectEvent(null)} />;
  }

  return (
    <View style={{ alignSelf: 'center', marginTop: 180 }}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>EVENTOS DISPONIBLES</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            setSelectEvent(item);
          }}>
            <Text style={styles.nameEvento}>{item.nombre}</Text>
            <Text style={styles.nameEvento}>{item.descripcion}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nameEvento: {
    fontSize: 20,
    marginVertical: 12,
    textAlign: 'center'
  }
})

export default Events