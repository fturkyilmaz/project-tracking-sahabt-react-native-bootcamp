import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../redux/system/actions';
import {WebView} from 'react-native-webview';
import {layout} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  const safeArea = useSafeAreaInsets();

  const {width, height} = layout;

  const userInfo = useSelector(state => state.system.userInfo);

  console.log('userInfo', userInfo);

  const logOut = () => {
    dispatch(userLogout());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: safeArea.top,
        marginBottom: safeArea.bottom,
      }}>
      {/* <Text>
        Home Screen Hoş Geldin {userInfo.name} {userInfo.surname}
      </Text> */}

      <WebView
        source={{
          uri: 'https://sahabt.com/en/',
        }}
        style={{width, height}}
      />
      {/* 
      <Button title="Çıkış Yap" onPress={() => logOut()} />
      <Button title="Logine Git" onPress={() => navigation.navigate('Login')} /> */}
    </View>
  );
}
