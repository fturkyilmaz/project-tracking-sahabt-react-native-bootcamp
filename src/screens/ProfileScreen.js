import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Platform,
  Image,
  StatusBar,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage, setTheme, userLogout} from '../redux/system/actions';
import CustomView from '../components/CustomView';
import Dropdown from '../components/Dropdown';
import CustomText from '../components/Text';
import Header from '../components/Header';
import {GetIsDarkMode, GetUserInfo} from '../redux/system/selectors';
import {colors, fonts} from '../constants';
import I18n, {changeLanguage} from '../i18n';

export default function ProfileScreen({navigation}) {
  const [lang, setLang] = useState('tr');

  const isDarkMode = GetIsDarkMode();

  const language = useSelector(state => state.system.language);

  console.log('Language', language);

  const userInfo = GetUserInfo();

  const dispatch = useDispatch();

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };

  const logOut = () => {
    dispatch(userLogout());
  };

  const handleLanguageChange = lang => {
    if (lang) {
      dispatch(setLanguage(lang));
    }
  };

  const onDonePress = () => {
    setLang(language);
    changeLanguage(language);
    navigation.navigate('Profile');
  };

  const infoBoxStyle = {
    ...styles.infoBox,
    backgroundColor: isDarkMode
      ? colors.dark.primary[6]
      : colors.light.background,
  };

  const cellStyle = {
    ...styles.cell,
    borderBottomColor: isDarkMode
      ? colors.dark.white[100]
      : colors.dark.primary[5],
  };

  return (
    <CustomView style={styles.container}>
      <Header title={I18n.t('profile')} />

      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {userInfo?.profilePic ? (
            <Image
              source={{uri: userInfo.profilePic}}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../assets/images/noImage.jpeg')}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          )}

          <View style={styles.cell}>
            <Text style={styles.displayName}>{userInfo.displayName}</Text>
          </View>

          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('title')} />
                <CustomText style={styles.info} text={userInfo.title} />
              </View>

              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('company')} />
                <CustomText style={styles.info} text={userInfo.company} />
              </View>

              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('mobile')} />
                <CustomText style={styles.info} text={userInfo.mobile} />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('manager')} />
                <CustomText
                  style={styles.info}
                  text={userInfo.managerDisplayName}
                />
              </View>
              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('unit')} />
                <CustomText style={styles.info} text={userInfo.unitName} />
              </View>
            </View>
          </View>
          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t('themeChoose')} />

                <View style={styles.row}>
                  <CustomText style={styles.title} text="Dark Mode" />
                  <Switch
                    onValueChange={val => toggleTheme(val)}
                    value={isDarkMode}
                  />
                </View>
              </View>
              <View style={cellStyle}>
                <CustomText
                  style={styles.title}
                  text={I18n.t('languageChoose')}
                />

                <View style={{marginVertical: 10}}>
                  <Dropdown
                    items={[
                      {label: 'Türkçe', value: 'tr'},
                      {label: 'English', value: 'en'},
                    ]}
                    value={language}
                    placeholder="Dil Seçiniz"
                    onValueChange={val => handleLanguageChange(val)}
                    onDonePress={() => onDonePress()}
                  />
                </View>
              </View>
              <View style={{marginVertical: 15}}>
                <TouchableOpacity onPress={() => logOut()}>
                  <CustomText style={{fontSize: fonts.f14}} text=" Çıkış Yap" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollView: {
    paddingBottom: 20,
    margin: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cell: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark.primary[5],
  },
  topBackground: {},
  title: {marginVertical: 5, fontSize: fonts.f12, marginBottom: 5},
  info: {
    fontSize: fonts.f12,
    fontWeight: '400',
  },
  displayName: {fontSize: fonts.f15, color: colors.white[100]},
  infoBox: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.cFFFFFF,
    marginVertical: 15,
    elevation: 3,
  },
  infoContainer: {
    padding: 20,
    elevation: 3,
    marginTop: 5,
  },
});
