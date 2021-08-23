import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';

export default function Button({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', padding: 17, borderRadius: 5},
  button: {
    width: '100%',
    backgroundColor: colors.cFFFFFF,
    borderColor: colors.cf5f5fb,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.f12,
    height: 15,
    letterSpacing: 1.2,
    fontWeight: '600',
    color: colors.c324c94,
  },
});
