import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {fonts, colors} from '../constants';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import I18n from '../i18n';

const storageKey = 'todo';

export default function TaskScreen() {
  const [todo, setTodo] = useState([]);

  const [textInput, setTextInput] = useState('');

  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const addTodo = () => {
    if (textInput === '') {
      Alert.alert('Hata', 'Lütfen görevi boş bırakmayınız !');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };

      setTodo([...todo, newTodo]);

      setTextInput('');
    }
  };

  const getToDoFromUserDevice = async () => {
    try {
      const response = await AsyncStorage.getItem(storageKey);

      if (response) {
        const parseJSON = JSON.parse(response);

        setTodo(parseJSON);
      }
    } catch (error) {
      console.log('error getToDoFromUserDevice', error);
    }
  };

  const saveTodoUserDevice = async payload => {
    try {
      const response = JSON.stringify(payload);
      await AsyncStorage.setItem(storageKey, response);
    } catch (error) {
      console.log('error saveTodoUserDevice', error);
    }
  };

  const markTodoComplete = todoId => {
    const newTodoItem = todo.map(item => {
      if (item.id === todoId) {
        return {...item, completed: true};
      }

      return item;
    });

    setTodo(newTodoItem);
  };

  const deleteTodo = todoId => {
    const newTodoItem = todo.filter(item => item.id !== todoId);

    setTodo(newTodoItem);
  };

  const ListItem = ({data}) => {
    return (
      <View style={isDarkMode === false ? styles.listItem : styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: fonts.f13,
              color: isDarkMode
                ? colors.dark.text[100]
                : colors.light.white[100],
              textDecorationLine: data?.completed ? 'line-through' : 'none',
            }}>
            {data?.task}
          </Text>
        </View>
        {!data?.completed && (
          <TouchableOpacity onPress={() => markTodoComplete(data.id)}>
            <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
              <Icon name="done" size={20} color={colors.cFFFFFF} />
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => deleteTodo(data.id)}>
          <View style={styles.actionIcon}>
            <Icon name="delete" size={20} color={colors.cFFFFFF} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    getToDoFromUserDevice();
  }, []);

  useEffect(() => {
    saveTodoUserDevice(todo);
  }, [todo]);

  return (
    <CustomView style={styles.container}>
      <Header title={I18n.t('task')} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todo}
        renderItem={({item}) => <ListItem data={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={I18n.translate('taskAdd')}
            onChangeText={setTextInput}
            placeholderTextColor={colors.cFFFFFF}
            value={textInput}
            style={styles.input}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="add"
            color={isDarkMode ? colors.dark.background : colors.light.text[100]}
            size={30}
            onPress={addTodo}
          />
        </View>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  listItem: {
    padding: 20,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 5,
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 10,
    elevation: 40,
    flex: 1,
    marginVertical: 20,
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.cFFFFFF,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  input: {
    color: colors.cFFFFFF,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.cFFFFFF,
  },
});
