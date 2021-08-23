import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {images, colors} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    console.log('onChangeText ', pageData, key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    <ScrollView
      style={{backgroundColor: colors.backgroundColor}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={images.logo}
          style={{width: 300, height: 100}}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="Kullanıcı Adı"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cFFFFFF}
            placeHolderTextColor={colors.cFFFFFF}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Şifre"
            value={pageData.password}
            icon={'lock-outline'}
            color={colors.cFFFFFF}
            placeHolderTextColor={colors.cFFFFFF}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Button
            onPress={() => alert('Giriş Yap Tetiklendi!!')}
            text="Giriş Yap"
          />
        </View>
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
});
