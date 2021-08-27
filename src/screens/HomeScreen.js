import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../redux/system/actions';
import {WebView} from 'react-native-webview';
import {layout} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomView from '../components/CustomView';
import Header from '../components/Header';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const safeArea = useSafeAreaInsets();

  const {width, height} = layout;

  return (
    <CustomView
      style={{
        flex: 1,
      }}>
      <Header title="Home" />
    </CustomView>
  );
}
