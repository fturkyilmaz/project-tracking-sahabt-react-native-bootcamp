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
import {images, colors, fonts} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import DeviceInfo from 'react-native-device-info';

export default function LoginScreen() {
  const [pageData, setPageData] = useState({
    username: 'SHTFURKAN',
    password: 'SHT_MANAGER',
  });

  const onChangeText = (key, value) => {
    console.log('onChangeText ', pageData, key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(remember => !remember);
  };

  const versionNumber = DeviceInfo.getVersion();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="Kullanıcı Adı"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cFFFFFF}
            style={styles.input}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Şifre"
            value={pageData.password}
            isHidden
            icon={'lock-outline'}
            color={colors.cFFFFFF}
            style={styles.input}
          />
        </View>
        <View style={styles.rememberMeContainer}>
          <Checkbox
            onChangeState={() => handleRememberMe()}
            style={{marginRight: 10}}
            checked={rememberMe}
            checkedColor={colors.white[50]}
          />
          <Text style={styles.rememberMeText}>Beni Hatırla</Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Button
            onPress={() => alert('Giriş Yap Tetiklendi!!')}
            text="Giriş Yap"
          />
        </View>
      </View>
      <View style={styles.versionNumberContainer}>
        <Text style={styles.versionNumberText}>v{versionNumber}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 5,
  },
  logo: {width: 300, height: 100},
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 17,
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.cFFFFFF,
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.cFFFFFF,
  },
  versionNumberContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
