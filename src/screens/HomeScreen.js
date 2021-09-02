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
import {GetIsDarkMode} from '../redux/system/selectors';
import I18n from '../i18n';

export default function HomeScreen({navigation}) {
  const isDarkMode = GetIsDarkMode();

  const [pageData, setPageData] = useState({
    description: '',
    projectId: null,
    time: '',
    userId: 1,
  });

  const [project, setProject] = useState([]);

  const dispatch = useDispatch();

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text}));
  };

  const onDonePress = () => {};

  const saveProjectTimeline = () => {
    try {
      console.log('PAGE', pageData);
      axios
        .post(apiConfig.prefixes.saveProject, pageData)
        .then(response => console.log(JSON.stringify(response.data, null, 4)));
    } catch (error) {}
  };

  const fetchProjectList = () => {
    try {
      dispatch(toggleLoader());

      axios.get(apiConfig.prefixes.projectList).then(response => {
        if (response.status === 200) {
          const {data} = response.data;

          const newData = data
            ? data.map(x => ({
                label: x.name,
                value: x.id,
              }))
            : [];

          setProject(newData);
        }
      });
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  const dropdownContainerStyle = {
    ...styles.dropdownContainer,
    backgroundColor: isDarkMode
      ? colors.dark.primary[6]
      : colors.light.background,
  };

  return (
    <CustomView
      style={{
        flex: 1,
      }}>
      <Header title={I18n.t('home')} />

      <View
        style={{
          flex: 1,
          marginVertical: 20,
          padding: 15,
        }}>
        <View style={dropdownContainerStyle}>
          <Dropdown
            items={project}
            placeholder={I18n.t('projectChoose')}
            onValueChange={val => onChangeText('projectId', val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <View style={dropdownContainerStyle}>
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
            placeholder={I18n.t('timeChoose')}
            onValueChange={val => onChangeText('time', val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <Input
          placeHolder={I18n.t('projectDescription')}
          style={styles.inputContainer}
          onChangeText={val => onChangeText('description', val)}
          value={pageData.description}
          multiline
          color={colors.cFFFFFF}
        />
        <View style={styles.inputContainer}>
          <Button
            onPress={() => saveProjectTimeline()}
            text={I18n.t('saveProjectTime')}
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
  dropdownContainer: {
    backgroundColor: colors.cFFFFFF,
    padding: 15,
  },
});
