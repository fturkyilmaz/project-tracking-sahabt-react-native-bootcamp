import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants';

export default function Checkbox({
  checked,
  checkedColor,
  style,
  onChangeState,
}) {
  return (
    <TouchableOpacity>
      <Icon name="check" color={checked ? checkedColor : colors.cFFFFFF} />
    </TouchableOpacity>
  );
}
