import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../constants';

export default function Input({
  onChangeText,
  value = '',
  isHidden,
  icon,
  placeHolder = '',
  style,
  color,
  ...props
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={[styles.container, {...style}]}>
      <Icon name={icon} size={26} color={color} style={styles.icon} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={colors.white[50]}
        placeholder={placeHolder}
        secureTextEntry={isHidden ? !showPass : false}
        style={[styles.text, {color}]}
        underlineColorAndroid="transparent"
        {...props}
      />

      {isHidden && (
        <IconCommunity
          name={showPass ? 'eye' : 'eye-off'}
          onPress={() => setShowPass(pass => !pass)}
          color={color}
          style={styles.icon}
          size={26}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {marginRight: 15},
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    // marginHorizontal: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#97a1be',
  },
  text: {
    width: '80%',
    marginTop: 3,
    fontSize: fonts.f13,
    letterSpacing: 1,
    fontWeight: '600',
    color: colors.cFFFFFF,
  },
});
