import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBa, Button, Platform,  StatusBar, View, TouchableOpacity, Image} from 'react-native';
import returnButton from './Images/returnButton.webp';


const App = () => {
  return (
    <SafeAreaView style={styles2.container}>
      <StatusBar hidden />

      
      <TouchableOpacity style={{}} onPress={() => window.location.reload()}> 
        <Image source={returnButton} style={{width: 50, height: 50}} />$ npm install --save react-native-restart
      </TouchableOpacity>

      <Text style={styles3.text}>
        Start of the first scroll view
      </Text>
      
      <ScrollView style={styles1.scrollView} horizontal={false}>


        <ScrollView style={styles1.scrollView} horizontal={true}>

          <Text style={styles.text}>
            Start of the Horazontal ScrollView
          </Text>
        </ScrollView>


        <Text style={styles.text}>
          Start of the second scroll view
        </Text>
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#1a1f33',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
    color: '#fff',
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#1a1f33',
    marginHorizontal: 0,
    marginVertical: 0,
    
  },
  text: {
    fontSize: 42,
    color: '#fff',
  },
});

const styles3 = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'italic',
    flexDirection: 'row',
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default App;

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#1a1f33',
  },
});
