import React, {useState} from 'react';
import {View, Text, SafeAreaView, Platform, StatusBar} from 'react-native';

export default function App() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View>
        <Text>App Screen</Text>
      </View>
    </SafeAreaView>
  );
}
