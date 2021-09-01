import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../constants';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import axios from '../utils/axios';
import {hideLoader, toggleLoader} from '../redux/system/actions';
import apiConfig from '../config/apiConfig';

export default function HomeScreen({navigation}) {
  const [pageData, setPageData] = useState({
    description: '',
    projectId: null,
    time: '',
  });

  const [project, setProject] = useState([]);

  const dispatch = useDispatch();

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text}));
  };

  const onDonePress = () => {};

  const saveProjectTimeline = () => {};

  const fetchProjectList = () => {
    try {
      dispatch(toggleLoader());

      axios.get(apiConfig.prefixes.projectList).then(response => {
        const newData = response?.data
          ? response.data.map(x => ({
              label: x.name,
              value: x.id,
            }))
          : [];

        setProject(newData);
      });
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <CustomView
      style={{
        flex: 1,
      }}>
      <Header title="Home" />

      <View
        style={{
          flex: 1,
          marginVertical: 20,
          padding: 15,
        }}>
        <View style={styles.inputContainer}>
          <Dropdown
            items={project}
            placeholder="Proje Seçiniz"
            onValueChange={val => onChangeText('project', val)}
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
            onValueChange={val => onChangeText('time', val)}
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
