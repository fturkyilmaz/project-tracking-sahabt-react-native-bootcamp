import React, {useMemo} from 'react';
import {View} from 'react-native';
import {colors} from '../../constants';
import {useSelector} from 'react-redux';

export default function CustomView(props) {
  const isDark = useSelector(state => state.system.isDarkMode);

  const containerStyle = useMemo(() => {
    const styles = {
      backgroundColor: isDark
        ? colors.dark.primary[1]
        : colors.light.primary[1],
      ...props.style,
    };

    return styles;
  }, [props, isDark]);

  return <View style={containerStyle}>{props.children}</View>;
}
