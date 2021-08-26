import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogout} from '../redux/system/actions';
import {WebView} from 'react-native-webview';
import {layout} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomView from '../components/CustomView';

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
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>
        Home Screen Hoş Geldin {userInfo.name} {userInfo.surname}
      </Text>

      <Button title="Çıkış Yap" onPress={() => logOut()} />
      <Button title="Logine Git" onPress={() => navigation.navigate('Login')} />
    </CustomView>
  );
}
