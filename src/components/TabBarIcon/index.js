import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selectors';

const TabBarIcon = ({name}) => {
  const isDark = GetIsDarkMode();

  const color = isDark ? colors.dark.icon : colors.light.icon;

  return <Icon name={name} color={color} size={25} />;
};

export default TabBarIcon;
