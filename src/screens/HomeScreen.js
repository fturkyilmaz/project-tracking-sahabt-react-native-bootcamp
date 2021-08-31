import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {layout, colors} from '../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

export default function HomeScreen({navigation}) {
  const [pageData, setPageData] = useState({
    description: '',
    projectId: null,
    time: '',
  });

  const dispatch = useDispatch();

  const safeArea = useSafeAreaInsets();

  const {width, height} = layout;

  const handleLanguageChange = value => {
    if (value) {
    }
  };

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text}));
  };

  const onDonePress = () => {};

  const saveProjectTimeline = () => {};

  return (
    <CustomView
      style={{
        flex: 1,
      }}>
      <Header title="Home" />

      <View
        style={{
          flex: 1,
          margin: 20,
        }}>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: 'Coffy', value: 1},
              {label: 'Plugger', value: 2},
              {label: 'Saha Bt', value: 3},
            ]}
            placeholder="Proje Seçiniz"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: '1 Saat', value: 60},
              {label: '2 Saat', value: 120},
              {label: '3 Saat', value: 180},
              {label: '4 Saat', value: 240},
              {label: '5 Saat', value: 300},
              {label: '6 Saat', value: 360},
              {label: '7 Saat', value: 420},
              {label: '8 Saat', value: 480},
            ]}
            placeholder="Süre Seçiniz"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <Input
          placeHolder="Proje açıklaması ekleyiniz"
          style={styles.inputContainer}
          onChangeText={val => onChangeText('description', val)}
          value={pageData.description}
          multiline
          color={colors.cFFFFFF}
        />
        <View style={styles.inputContainer}>
          <Button
            onPress={() => saveProjectTimeline()}
            text={'Çalışmamı Kaydet'}
          />
        </View>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
});
