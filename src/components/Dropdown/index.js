import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GetIsDarkMode} from '../../redux/system/selectors';

export default function Dropdown({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = 'Seçiniz',
  onDonePress = () => {},
}) {
  const isDark = GetIsDarkMode();
  const doneText = 'Tamam';
  const iconStyle = isDark ? {} : {};

  return (
    <View style={styles.dropdown}>
      <RNPickerSelect
        onValueChange={val => onValueChange(val)}
        items={items}
        value={value}
        doneText={doneText}
        placeholder={{label: placeholder}}
        style={{
          inputIOS: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: isDark ? colors.cFFFFFF : colors.c324c94,
          },
          inputAndroid: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: isDark ? colors.cFFFFFF : colors.c324c94,
            top: 0,
          },
        }}
        onDonePress={() => onDonePress()}
        Icon={() => {
          return (
            <Icon
              name="expand-more"
              size={20}
              color={isDark ? colors.dark.white[100] : colors.light.primary[1]}
              style={iconStyle}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: Platform.OS === 'ios' ? 42 : 38,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    color: colors.white[100],
  },
  picker: {},
  icon: {},
});
