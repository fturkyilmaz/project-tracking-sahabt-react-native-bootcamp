import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants';

const TabBarIcon = ({name}) => {
  const isDark = false;

  const color = isDark ? colors.dark.icon : colors.light.icon;

  return <Icon name={name} color={color} size={25} />;
};

export default TabBarIcon;
