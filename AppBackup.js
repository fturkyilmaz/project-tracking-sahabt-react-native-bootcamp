import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import DetailScreen from './src/screens/DetailScreen';
import {Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import VectorIcons from './src/components/Icons';

Icons.loadFont();

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <Button
            title="Info"
            onPress={() => alert('Infoya bastınız')}
            color="white"
          />
        ),
        headerRight: () => (
          <Button
            title="Sepet Boşalt"
            onPress={() => alert('Sepeti boşalttım!!')}
            color="white"
          />
        ),
      }}>
      {/* <Stack.Group
        screenOptions={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },

          headerBackTitleStyle: {color: 'white'},
        }}>
        <Stack.Screen
          component={HomeScreen}
          name="Home"
          options={{title: 'Ana Sayfa'}}
        />

        <Stack.Screen
          component={DetailScreen}
          name="Detail"
          options={{title: 'Detay'}}
          initialParams={{age: 35, isShowTitle: false}}
        />
      </Stack.Group> */}

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          component={LoginScreen}
          name="Login"
          options={{
            title: 'Giriş Yap',
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen name="CustomStack">
          {props => (
            <HomeScreen
              {...props}
              extraData={[
                {title: 'HEYASD'},
                {title: 'HEYASD'},
                {title: 'HEYASD'},
              ]}
            />
          )}
        </Stack.Screen>
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={route =>
        console.log('Route', route.route.name) || {
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

          tabBarIcon: ({focused}) => {
            const {name} = route.route;

            let icon = '';

            if (name === screenName.home) {
              icon = 'home-outline';
            }
            if (name === screenName.detail) {
              icon = 'build-outline';
            }
            if (name === screenName.login) {
              icon = 'chatbox-ellipses-outline';
            }

            if (name === screenName.root) {
              icon = 'chatbox-ellipses-outline';
            }

            return <VectorIcons size={25} name={icon} focused={focused} />;
          },
        }
      }>
      <Tab.Screen
        name="Root"
        component={StackNavigator}
        options={{title: 'Giriş Yap'}}
      />
      <Tab.Screen
        name={screenName.home}
        component={HomeScreen}
        options={{
          title: 'Ana sayfa',
          tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'pink', color: 'white'},
          // tabBarIcon: ({focused}) => (
          //   <VectorIcons size={25} name="home-outline" focused={focused} />
          // ),
        }}
      />
      <Tab.Screen
        name={screenName.detail}
        component={DetailScreen}
        initialParams={{name: 'FURKAN', surname: 'TÜRKYILMAZ'}}
        options={{
          title: 'Detay',
          // tabBarIcon: ({focused}) => (
          //   <VectorIcons name="build-outline" size={24} focused={focused} />
          // ),
        }}
      />
      {/* <Tab.Screen
      name={screenName.login}
      component={LoginScreen}
      initialParams={{text: 'FURKAN'}}
      options={{
        title: 'Giriş',
        tabBarIcon: ({focused}) => (
          <VectorIcons
            name="chatbox-ellipses-outline"
            size={24}
            focused={focused}
          />
        ),
      }}
    /> */}
    </Tab.Navigator>
  );
};

//react native vector icons

const screenName = {
  home: 'Home',
  detail: 'Detail',
  login: 'Login',
  root: 'Root',
};

export default function App() {
  return <NavigationContainer>{TabNavigator()}</NavigationContainer>;
}
