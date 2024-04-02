/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 2-1 E
* Date: 2024-04-02
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { getTanulok } from './services/tanulokServices';

export default function App() {
  const [tanulok, setTanulok] = useState([]);

  useEffect(() =>{
    getTanulok().then((data) => {
      console.log(data)
      setTanulok(data)
    } );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.cim}>Tanulók</Text>

      <FlatList
      data = {tanulok}
      renderItem = {({item}) => (
        <View style = {styles.items}>
          <Text>{item.name}</Text>
          <Text>{item.city}</Text>
          <Text style={styles.birthtext}>Szül:{item.birth}</Text>
          </View>
      )}  
    />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFD5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  items: {
    border: 'solid 1px navy',
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: 'orange',
    boxShadow: '5px, 5px, 5px, black',
    textAlign: "center",
  },

  cim: {
    fontSize: 20,
  },

  birthtext: {
    fontSize: 10,
  },
});
