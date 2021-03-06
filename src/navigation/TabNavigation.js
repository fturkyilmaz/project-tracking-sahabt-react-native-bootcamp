import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskScreen from '../screens/TaskScreen';
import TabBarIcon from '../components/TabBarIcon';
import I18n from '../i18n';
import {GetIsDarkMode} from '../redux/system/selectors';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const homeTitle = I18n.t('home');

  const profileTitle = I18n.t('profile');

  const taskTitle = I18n.t('task');

  const isDarkMode = GetIsDarkMode();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkMode
          ? colors.white[100]
          : colors.light.icon,
      }}>
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="home" />,
          title: homeTitle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="person-circle-outline" />,
          title: profileTitle,
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="today-outline" />,
          title: taskTitle,
        }}
      />
    </Tab.Navigator>
  );
}
